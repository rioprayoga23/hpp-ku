import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthUser } from '@/src/server/auth';

export const dynamic = 'force-dynamic';
const COOKIE_NAME = 'hpp_ku_workspace';

function getClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  if (!url || !key || key.includes('PASTE_') || key.includes('YOUR_'))
    return null;
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

async function workspace() {
  const store = await cookies();
  const existing = store.get(COOKIE_NAME)?.value;
  return { id: existing || crypto.randomUUID(), shouldSet: !existing };
}

function withWorkspaceCookie(
  response: NextResponse,
  workspaceId: string,
  shouldSet: boolean
) {
  if (shouldSet)
    response.cookies.set(COOKIE_NAME, workspaceId, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 365 * 2,
      path: '/',
    });
  return response;
}

function configError() {
  return NextResponse.json(
    {
      error:
        'Supabase belum terhubung. Periksa variabel Supabase di .env.local.',
    },
    { status: 503 }
  );
}
function unauthorized() {
  return NextResponse.json(
    { error: 'Sesi login tidak ditemukan. Silakan masuk kembali.' },
    { status: 401 }
  );
}
function databaseError(error: unknown) {
  console.error('[recipes] database request failed', error);
  return 'Penyimpanan resep sedang bermasalah. Coba lagi sebentar.';
}
function isDuplicate(error: unknown) {
  return Boolean(
    error &&
    typeof error === 'object' &&
    'code' in error &&
    error.code === '23505'
  );
}
export async function GET() {
  if (!(await getAuthUser())) return unauthorized();
  const client = getClient();
  if (!client) return configError();
  const { id: workspaceId, shouldSet } = await workspace();
  try {
    const query = await client
      .from('recipes')
      .select('id,name,data,updated_at')
      .eq('workspace_id', workspaceId)
      .order('updated_at', { ascending: false });
    if (query.error) throw query.error;
    return withWorkspaceCookie(
      NextResponse.json({ recipes: query.data ?? [] }),
      workspaceId,
      shouldSet
    );
  } catch (error) {
    return withWorkspaceCookie(
      NextResponse.json({ error: databaseError(error) }, { status: 500 }),
      workspaceId,
      shouldSet
    );
  }
}

export async function POST(request: Request) {
  if (!(await getAuthUser())) return unauthorized();
  const client = getClient();
  if (!client) return configError();
  const body = await request.json().catch(() => null);
  if (!body?.data || typeof body.data !== 'object' || Array.isArray(body.data))
    return NextResponse.json(
      { error: 'Data resep tidak valid.' },
      { status: 400 }
    );
  const serialized = JSON.stringify(body.data);
  if (serialized.length > 500_000)
    return NextResponse.json(
      { error: 'Data resep terlalu besar.' },
      { status: 413 }
    );
  const { id: workspaceId, shouldSet } = await workspace();
  const requestedId =
    typeof body.id === 'string' && /^[0-9a-f-]{36}$/i.test(body.id)
      ? body.id
      : null;
  const name =
    String(body.name || body.data.name || 'Resep tanpa nama')
      .trim()
      .slice(0, 160) || 'Resep tanpa nama';
  const updatedAt = new Date().toISOString();
  try {
    // IDs are global primary keys, so check the current workspace first and
    // allocate a fresh ID when a client sends an ID from another workspace.
    const found = requestedId
      ? await client
          .from('recipes')
          .select('id')
          .eq('id', requestedId)
          .eq('workspace_id', workspaceId)
          .maybeSingle()
      : { data: null, error: null };
    if (found.error) throw found.error;
    if (found.data) {
      const result = await client
        .from('recipes')
        .update({ name, data: body.data, updated_at: updatedAt })
        .eq('id', requestedId)
        .eq('workspace_id', workspaceId)
        .select('id,name,data,updated_at')
        .single();
      if (result.error) throw result.error;
      return withWorkspaceCookie(
        NextResponse.json({ recipe: result.data }),
        workspaceId,
        shouldSet
      );
    }

    let recipeId = requestedId || crypto.randomUUID();
    if (requestedId) {
      const claimed = await client
        .from('recipes')
        .select('id')
        .eq('id', requestedId)
        .maybeSingle();
      if (claimed.error) throw claimed.error;
      if (claimed.data) recipeId = crypto.randomUUID();
    }
    let result = await client
      .from('recipes')
      .insert({
        id: recipeId,
        workspace_id: workspaceId,
        name,
        data: body.data,
        updated_at: updatedAt,
      })
      .select('id,name,data,updated_at')
      .single();
    // Keep the endpoint safe against a concurrent insert between the global
    // check and INSERT. Retry once with a new UUID for that case.
    if (isDuplicate(result.error)) {
      recipeId = crypto.randomUUID();
      result = await client
        .from('recipes')
        .insert({
          id: recipeId,
          workspace_id: workspaceId,
          name,
          data: body.data,
          updated_at: updatedAt,
        })
        .select('id,name,data,updated_at')
        .single();
    }
    if (result.error) throw result.error;
    return withWorkspaceCookie(
      NextResponse.json({ recipe: result.data }),
      workspaceId,
      shouldSet
    );
  } catch (error) {
    return withWorkspaceCookie(
      NextResponse.json({ error: databaseError(error) }, { status: 500 }),
      workspaceId,
      shouldSet
    );
  }
}

export async function DELETE(request: Request) {
  if (!(await getAuthUser())) return unauthorized();
  const client = getClient();
  if (!client) return configError();
  const recipeId = new URL(request.url).searchParams.get('id');
  if (!recipeId || !/^[0-9a-f-]{36}$/i.test(recipeId))
    return NextResponse.json(
      { error: 'ID resep tidak valid.' },
      { status: 400 }
    );
  const { id: workspaceId, shouldSet } = await workspace();
  try {
    const result = await client
      .from('recipes')
      .delete()
      .eq('id', recipeId)
      .eq('workspace_id', workspaceId);
    if (result.error) throw result.error;
    return withWorkspaceCookie(
      NextResponse.json({ ok: true }),
      workspaceId,
      shouldSet
    );
  } catch (error) {
    return withWorkspaceCookie(
      NextResponse.json({ error: databaseError(error) }, { status: 500 }),
      workspaceId,
      shouldSet
    );
  }
}
