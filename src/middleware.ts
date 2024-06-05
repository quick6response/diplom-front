import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  // console.log('middleware', headers);
  // Store current request pathname in a custom header
  headers.set('x-pathname', request.nextUrl.pathname);
  headers.set('x-current-path', request.nextUrl.pathname);

  // console.log('next middleware', headers);

  return NextResponse.next({
    request: {
      headers
    }
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
};
