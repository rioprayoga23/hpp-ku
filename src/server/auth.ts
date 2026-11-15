import { cookies } from 'next/headers';
import { createHash, randomBytes, scrypt, timingSafeEqual } from 'node:crypto';
import { createClient } from '@supabase/supabase-js';

export const AUTH_COOKIE_NAME = 'hpp_ku_auth';
const SESSION_MAX_AGE = 60 * 60 * 24 * 365 * 10;
const FALLBACK_USERS_WORKSPACE = '__hpp_ku_auth_users__';
const FALLBACK_SESSIONS_WORKSPACE = '__hpp_ku_auth_sessions__';
const FALLBACK_USER_NAME = '__auth_user__';

export type AuthUser = {
  id: string;
  username: string;
};

export function getAuthClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  if (!url || !key || key.includes('PASTE_') || key.includes('YOUR_'))
    return null;
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

function hashSessionToken(token: string) {
  return createHash('sha256').update(token).digest('hex');
}

function derivePassword(password: string, salt: string) {
  return new Promise<Buffer>((resolve, reject) => {
    scrypt(
      password,
      salt,
      64,
      { N: 16384, r: 8, p: 1, maxmem: 32 * 1024 * 1024 },
      (error, key) => (error ? reject(error) : resolve(key))
    );
  });
}

async function hashPassword(password: string) {
  const salt = randomBytes(16).toString('base64url');
  const key = await derivePassword(password, salt);
  return `scrypt$${salt}$${key.toString('base64url')}`;
}

function missingTable(error: unknown) {
  return Boolean(
    error &&
    typeof error === 'object' &&
    'code' in error &&
    (error.code === 'PGRST205' || error.code === '42P01')
  );
}

function bootstrapCredentials() {
  const username = normalizeUsername(process.env.APP_LOGIN_USERNAME);
  const password = String(process.env.APP_LOGIN_PASSWORD ?? '');
  return username && password ? { username, password } : null;
}

type StoredUser = AuthUser & { password_hash: string };

async function fallbackUser(
  client: NonNullable<ReturnType<typeof getAuthClient>>
) {
  const result = await client
    .from('recipes')
    .select('id,data')
    .eq('workspace_id', FALLBACK_USERS_WORKSPACE)
    .eq('name', FALLBACK_USER_NAME)
    .limit(1)
    .maybeSingle();
  if (result.error) throw result.error;
  const data = result.data?.data;
  if (!data || typeof data !== 'object' || Array.isArray(data)) return null;
  const record = data as Record<string, unknown>;
  if (
    typeof record.username !== 'string' ||
    typeof record.password_hash !== 'string'
  )
    return null;
  return {
    id: String(result.data?.id ?? ''),
    username: record.username,
    password_hash: record.password_hash,
  } satisfies StoredUser;
}

export async function findOrBootstrapUser(
  client: NonNullable<ReturnType<typeof getAuthClient>>,
  username: string
) {
  const result = await client
    .from('app_users')
    .select('id,username,password_hash')
    .eq('username', username)
    .maybeSingle();
  if (!result.error) {
    if (result.data) return result.data as StoredUser;
    const bootstrap = bootstrapCredentials();
    if (!bootstrap || bootstrap.username !== username) return null;
    const created = await client
      .from('app_users')
      .insert({
        username,
        password_hash: await hashPassword(bootstrap.password),
      })
      .select('id,username,password_hash')
      .single();
    if (created.error) throw created.error;
    return created.data as StoredUser;
  }
  if (!missingTable(result.error)) throw result.error;

  const existing = await fallbackUser(client);
  if (existing) return existing.username === username ? existing : null;
  const bootstrap = bootstrapCredentials();
  if (!bootstrap || bootstrap.username !== username) return null;
  const passwordHash = await hashPassword(bootstrap.password);
  const created = await client
    .from('recipes')
    .insert({
      workspace_id: FALLBACK_USERS_WORKSPACE,
      name: FALLBACK_USER_NAME,
      data: { authKind: 'user', username, password_hash: passwordHash },
    })
    .select('id,data')
    .single();
  if (created.error) throw created.error;
  return {
    id: String(created.data.id),
    username,
    password_hash: passwordHash,
  } satisfies StoredUser;
}

export async function verifyPassword(password: string, encoded: string) {
  const [scheme, salt, expectedText] = String(encoded).split('$');
  if (scheme !== 'scrypt' || !salt || !expectedText) return false;
  try {
    const expected = Buffer.from(expectedText, 'base64url');
    const actual = await derivePassword(password, salt);
    return (
      expected.length === actual.length && timingSafeEqual(actual, expected)
    );
  } catch {
    return false;
  }
}

export function normalizeUsername(value: unknown) {
  return String(value ?? '')
    .trim()
    .toUpperCase()
    .slice(0, 80);
}

export async function getAuthUser(): Promise<AuthUser | null> {
  const client = getAuthClient();
  if (!client) return null;
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  if (!token) return null;
  const tokenHash = hashSessionToken(token);
  const session = await client
    .from('app_sessions')
    .select('user_id')
    .eq('token_hash', tokenHash)
    .maybeSingle();
  if (!session.error) {
    if (!session.data) return null;
    const user = await client
      .from('app_users')
      .select('id,username')
      .eq('id', session.data.user_id)
      .maybeSingle();
    if (user.error || !user.data) return null;
    await client
      .from('app_sessions')
      .update({ last_seen_at: new Date().toISOString() })
      .eq('token_hash', tokenHash);
    return user.data;
  }
  if (!missingTable(session.error)) return null;
  const fallbackSession = await client
    .from('recipes')
    .select('data')
    .eq('workspace_id', FALLBACK_SESSIONS_WORKSPACE)
    .eq('name', tokenHash)
    .limit(1)
    .maybeSingle();
  if (fallbackSession.error || !fallbackSession.data) return null;
  const data = fallbackSession.data.data;
  if (!data || typeof data !== 'object' || Array.isArray(data)) return null;
  const userId = String((data as Record<string, unknown>).user_id ?? '');
  const user = await fallbackUser(client);
  if (!user || user.id !== userId) return null;
  await client
    .from('recipes')
    .update({
      data: {
        ...(data as Record<string, unknown>),
        last_seen_at: new Date().toISOString(),
      },
    })
    .eq('workspace_id', FALLBACK_SESSIONS_WORKSPACE)
    .eq('name', tokenHash);
  return { id: user.id, username: user.username };
}

export async function createAuthSession(userId: string) {
  const client = getAuthClient();
  if (!client) throw new Error('Supabase belum terhubung.');
  const token = randomBytes(32).toString('base64url');
  const result = await client.from('app_sessions').insert({
    token_hash: hashSessionToken(token),
    user_id: userId,
  });
  if (!result.error) return token;
  if (!missingTable(result.error)) throw result.error;
  const fallback = await client.from('recipes').insert({
    workspace_id: FALLBACK_SESSIONS_WORKSPACE,
    name: hashSessionToken(token),
    data: {
      authKind: 'session',
      user_id: userId,
      token_hash: hashSessionToken(token),
      last_seen_at: new Date().toISOString(),
    },
  });
  if (fallback.error) throw fallback.error;
  return token;
}

export async function revokeAuthSession() {
  const client = getAuthClient();
  if (!client) return;
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  if (!token) return;
  const result = await client
    .from('app_sessions')
    .delete()
    .eq('token_hash', hashSessionToken(token));
  if (result.error && missingTable(result.error)) {
    await client
      .from('recipes')
      .delete()
      .eq('workspace_id', FALLBACK_SESSIONS_WORKSPACE)
      .eq('name', hashSessionToken(token));
  }
}

export function setAuthCookie<T extends Response>(response: T, token: string) {
  response.headers.append(
    'Set-Cookie',
    `${AUTH_COOKIE_NAME}=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_MAX_AGE}${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`
  );
  return response;
}

export function clearAuthCookie<T extends Response>(response: T) {
  response.headers.append(
    'Set-Cookie',
    `${AUTH_COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`
  );
  return response;
}
