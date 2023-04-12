import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (req.nextUrl.pathname.startsWith('/signin')) {
    if (session) {
      return NextResponse.rewrite(new URL('/', req.url));
    }
  }
  // if (!session) {
  //   const requestedPage = req.nextUrl.pathname;
  //   const url = req.nextUrl.clone();
  //   url.pathname = '/signin';
  //   url.search = `page=${requestedPage}`;
  //   return NextResponse.redirect(url);
  // }
}

export const config = {
  matcher: ['/api/orders/:path*'],
};
