import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const authenticated = token ? true : false

  if (!authenticated && request.nextUrl.pathname.startsWith('/rulings')) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  if (authenticated && request.nextUrl.pathname.endsWith('/')) {
    return NextResponse.redirect(new URL('/rulings', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/rulings/:path*']
}
