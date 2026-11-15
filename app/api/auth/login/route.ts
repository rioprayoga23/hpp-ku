import { NextResponse } from 'next/server';
import {
  createAuthSession,
  findOrBootstrapUser,
  getAuthClient,
  normalizeUsername,
  setAuthCookie,
  verifyPassword,
} from '@/src/server/auth';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const client = getAuthClient();
  if (!client)
    return NextResponse.json(
      { error: 'Supabase belum terhubung. Periksa konfigurasi server.' },
      { status: 503 }
    );

  const body = await request.json().catch(() => null);
  const username = normalizeUsername(body?.username);
  const password = String(body?.password ?? '');
  if (!username || !password)
    return NextResponse.json(
      { error: 'Username dan password wajib diisi.' },
      { status: 400 }
    );

  let user: Awaited<ReturnType<typeof findOrBootstrapUser>>;
  try {
    user = await findOrBootstrapUser(client, username);
  } catch (error) {
    console.error('[auth] user lookup failed', error);
    return NextResponse.json(
      { error: 'Login sedang bermasalah. Coba lagi sebentar.' },
      { status: 503 }
    );
  }
  if (!user || !(await verifyPassword(password, user.password_hash)))
    return NextResponse.json(
      { error: 'Username atau password belum sesuai.' },
      { status: 401 }
    );

  try {
    const token = await createAuthSession(user.id);
    const response = NextResponse.json({
      user: { id: user.id, username: user.username },
    });
    return setAuthCookie(response, token);
  } catch (error) {
    console.error('[auth] session creation failed', error);
    return NextResponse.json(
      { error: 'Sesi login belum berhasil dibuat.' },
      { status: 503 }
    );
  }
}
