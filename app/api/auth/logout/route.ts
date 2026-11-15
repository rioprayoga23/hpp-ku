import { NextResponse } from 'next/server';
import { clearAuthCookie, revokeAuthSession } from '@/src/server/auth';

export const dynamic = 'force-dynamic';

export async function POST() {
  await revokeAuthSession();
  return clearAuthCookie(NextResponse.json({ ok: true }));
}
