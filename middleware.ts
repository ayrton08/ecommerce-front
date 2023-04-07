import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!session) {
    const requestedPage = req.nextUrl.pathname;

    const url = req.nextUrl.clone();

    url.pathname = '/auth/login';
    url.search = `page=${requestedPage}`;

    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ['/api/orders/:path*'],
};
