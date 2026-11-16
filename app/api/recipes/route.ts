import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthUser } from '@/src/server/auth';

export const dynamic = 'force-dynamic';
const FALLBACK_USERS_WORKSPACE = '__hpp_ku_auth_users__';
const FALLBACK_SESSIONS_WORKSPACE = '__hpp_ku_auth_sessions__';

function getClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  if (!url || !key || key.includes('PASTE_') || key.includes('YOUR_'))
    return null;
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
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
  const user = await getAuthUser();
  if (!user) return unauthorized();
  const client = getClient();
  if (!client) return configError();
  try {
    // The app has one configured account. Read all recipe rows so recipes
    // saved before the cross-device fix (under a device cookie workspace)
    // remain visible on every device after login.
    const query = await client
      .from('recipes')
      .select('id,name,data,updated_at')
      .neq('workspace_id', FALLBACK_USERS_WORKSPACE)
      .neq('workspace_id', FALLBACK_SESSIONS_WORKSPACE)
      .order('updated_at', { ascending: false });
    if (query.error) throw query.error;
    return NextResponse.json({ recipes: query.data ?? [] });
  } catch (error) {
    return NextResponse.json({ error: databaseError(error) }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const user = await getAuthUser();
  if (!user) return unauthorized();
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
  // Use the authenticated Supabase-backed account as the shared workspace.
  // This value is stable across browsers and devices.
  const workspaceId = user.id;
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
    // IDs are global primary keys. Reuse an existing recipe ID when it is
    // already present in the shared database, regardless of its old device
    // workspace, and allocate a fresh ID only for a true collision.
    const found = requestedId
      ? await client
          .from('recipes')
          .select('id')
          .eq('id', requestedId)
          .neq('workspace_id', FALLBACK_USERS_WORKSPACE)
          .neq('workspace_id', FALLBACK_SESSIONS_WORKSPACE)
          .maybeSingle()
      : { data: null, error: null };
    if (found.error) throw found.error;
    if (found.data) {
      const result = await client
        .from('recipes')
        .update({ name, data: body.data, updated_at: updatedAt })
        .eq('id', requestedId)
        .neq('workspace_id', FALLBACK_USERS_WORKSPACE)
        .neq('workspace_id', FALLBACK_SESSIONS_WORKSPACE)
        .select('id,name,data,updated_at')
        .single();
      if (result.error) throw result.error;
      return NextResponse.json({ recipe: result.data });
    }

    let recipeId = requestedId || crypto.randomUUID();
    if (requestedId) {
      const claimed = await client
        .from('recipes')
        .select('id')
        .eq('id', requestedId)
        .neq('workspace_id', FALLBACK_USERS_WORKSPACE)
        .neq('workspace_id', FALLBACK_SESSIONS_WORKSPACE)
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
    return NextResponse.json({ recipe: result.data });
  } catch (error) {
    return NextResponse.json({ error: databaseError(error) }, { status: 500 });
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
  try {
    const result = await client
      .from('recipes')
      .delete()
      .eq('id', recipeId)
      .neq('workspace_id', FALLBACK_USERS_WORKSPACE)
      .neq('workspace_id', FALLBACK_SESSIONS_WORKSPACE);
    if (result.error) throw result.error;
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: databaseError(error) }, { status: 500 });
  }
}
