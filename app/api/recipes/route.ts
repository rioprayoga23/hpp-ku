import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getAuthUser } from '@/src/server/auth';
import { calculate, normalizeMenu } from '@/src/model.js';

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

type RecipeData = Record<string, unknown>;
type RecipeRow = {
  id: string;
  name: string;
  data: RecipeData;
  updated_at: string;
  workspace_id: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === 'object' && !Array.isArray(value));
}

function cloneJson<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function recipeCost(row: RecipeRow) {
  const menu = normalizeMenu({
    ...row.data,
    id: row.id,
    updatedAt: row.updated_at,
  });
  return calculate(menu).cost;
}

/**
 * Refresh saved recipe references after a source recipe changes. Each
 * dependent keeps a snapshot for exports, so update that snapshot and its
 * cached HPP before moving through the next dependency level.
 */
async function syncDependentRecipes(
  client: NonNullable<ReturnType<typeof getClient>>,
  sourceId: string
) {
  const query = await client
    .from('recipes')
    .select('id,name,data,updated_at,workspace_id')
    .neq('workspace_id', FALLBACK_USERS_WORKSPACE)
    .neq('workspace_id', FALLBACK_SESSIONS_WORKSPACE);
  if (query.error) throw query.error;

  const rows = (query.data ?? []).filter(
    (row: unknown): row is RecipeRow =>
      isRecord(row) &&
      typeof row.id === 'string' &&
      typeof row.name === 'string' &&
      isRecord(row.data) &&
      typeof row.updated_at === 'string' &&
      typeof row.workspace_id === 'string'
  );
  const byId = new Map(rows.map((row) => [row.id, row]));
  const changed = new Map<string, RecipeRow>();
  const updatedSourceIds = new Set([sourceId]);

  for (let pass = 0; pass < rows.length && updatedSourceIds.size; pass += 1) {
    let addedSource = false;
    for (const parent of rows) {
      if (parent.id === sourceId) continue;
      const items = Array.isArray(parent.data.items)
        ? parent.data.items.filter(isRecord)
        : [];
      if (!items.length) continue;

      let touched = false;
      const nextItems = items.map((item) => {
        if (item.kind !== 'recipe') return item;

        let source: RecipeRow | undefined = undefined;
        const referencedId =
          typeof item.sourceRecipeId === 'string' ? item.sourceRecipeId : null;
        if (referencedId && updatedSourceIds.has(referencedId)) {
          source = byId.get(referencedId);
        } else {
          for (const updId of updatedSourceIds) {
            const candidate = byId.get(updId);
            if (!candidate) continue;
            const candName = String(
              candidate.name || candidate.data?.name || ''
            )
              .trim()
              .toLowerCase();
            const itemName = String(item.sourceRecipeName || item.name || '')
              .trim()
              .toLowerCase();
            if (candName && candName === itemName) {
              source = candidate;
              break;
            }
          }
        }
        if (!source) return item;

        const sourceName =
          source.name || String(source.data.name || 'Resep tersimpan');
        const sourceHpp = recipeCost(source);
        const sourceMenu = normalizeMenu({
          ...source.data,
          id: source.id,
          name: sourceName,
          updatedAt: source.updated_at,
        });
        const nextItem = {
          ...item,
          sourceRecipeId: source.id,
          name: sourceName,
          sourceRecipeName: sourceName,
          sourceRecipeUpdatedAt: source.updated_at,
          sourceRecipeData: cloneJson(sourceMenu),
          recipeCost:
            sourceHpp !== null && Number.isFinite(sourceHpp)
              ? sourceHpp
              : item.recipeCost,
          price:
            sourceHpp !== null && Number.isFinite(sourceHpp)
              ? sourceHpp
              : item.price,
        };
        if (JSON.stringify(nextItem) !== JSON.stringify(item)) touched = true;
        return nextItem;
      });
      if (!touched) continue;

      const updated: RecipeRow = {
        ...parent,
        data: { ...parent.data, items: nextItems },
        updated_at: new Date().toISOString(),
      };
      Object.assign(parent, updated);
      byId.set(parent.id, parent);
      changed.set(parent.id, parent);
      if (!updatedSourceIds.has(parent.id)) {
        updatedSourceIds.add(parent.id);
        addedSource = true;
      }
    }
    if (!addedSource) break;
  }

  for (const row of changed.values()) {
    const result = await client
      .from('recipes')
      .update({ data: row.data, updated_at: row.updated_at })
      .eq('id', row.id);
    if (result.error) throw result.error;
  }
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
      await syncDependentRecipes(client, result.data.id);
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
    await syncDependentRecipes(client, result.data.id);
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

export async function PATCH(request: Request) {
  if (!(await getAuthUser())) return unauthorized();
  const client = getClient();
  if (!client) return configError();

  const body = await request.json().catch(() => null);
  const action = body?.action;

  if (action === 'rename-category') {
    const from = String(body?.from ?? '').trim();
    const to = String(body?.to ?? '').trim().slice(0, 60);
    if (!from || !to) {
      return NextResponse.json(
        { error: 'Nama kategori lama dan baru harus diisi.' },
        { status: 400 }
      );
    }
    try {
      const query = await client
        .from('recipes')
        .select('id,name,data,updated_at,workspace_id')
        .neq('workspace_id', FALLBACK_USERS_WORKSPACE)
        .neq('workspace_id', FALLBACK_SESSIONS_WORKSPACE);
      if (query.error) throw query.error;

      const rows = (query.data ?? []).filter(
        (row: unknown): row is RecipeRow =>
          isRecord(row) &&
          typeof row.id === 'string' &&
          isRecord(row.data)
      );

      const matching = rows.filter(
        (row) => String(row.data.category ?? '').trim() === from
      );

      const now = new Date().toISOString();
      for (const row of matching) {
        const nextData = { ...row.data, category: to };
        const result = await client
          .from('recipes')
          .update({ data: nextData, updated_at: now })
          .eq('id', row.id);
        if (result.error) throw result.error;
      }

      return NextResponse.json({ ok: true, count: matching.length });
    } catch (error) {
      return NextResponse.json(
        { error: databaseError(error) },
        { status: 500 }
      );
    }
  }

  if (action === 'delete-category') {
    const category = String(body?.category ?? '').trim();
    if (!category) {
      return NextResponse.json(
        { error: 'Nama kategori harus diisi.' },
        { status: 400 }
      );
    }
    try {
      const query = await client
        .from('recipes')
        .select('id,name,data,updated_at,workspace_id')
        .neq('workspace_id', FALLBACK_USERS_WORKSPACE)
        .neq('workspace_id', FALLBACK_SESSIONS_WORKSPACE);
      if (query.error) throw query.error;

      const rows = (query.data ?? []).filter(
        (row: unknown): row is RecipeRow =>
          isRecord(row) &&
          typeof row.id === 'string' &&
          isRecord(row.data)
      );

      const matching = rows.filter(
        (row) => String(row.data.category ?? '').trim() === category
      );

      const now = new Date().toISOString();
      for (const row of matching) {
        const nextData = { ...row.data, category: '' };
        const result = await client
          .from('recipes')
          .update({ data: nextData, updated_at: now })
          .eq('id', row.id);
        if (result.error) throw result.error;
      }

      return NextResponse.json({ ok: true, count: matching.length });
    } catch (error) {
      return NextResponse.json(
        { error: databaseError(error) },
        { status: 500 }
      );
    }
  }

  return NextResponse.json(
    { error: 'Aksi kategori tidak valid.' },
    { status: 400 }
  );
}
