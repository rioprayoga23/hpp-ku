import { NextResponse } from 'next/server';
import { clearAuthCookie, getAuthUser } from '@/src/server/auth';

export const dynamic = 'force-dynamic';

export async function GET() {
  const user = await getAuthUser();
  if (!user) return clearAuthCookie(NextResponse.json({ user: null }));
  return NextResponse.json({ user });
}
