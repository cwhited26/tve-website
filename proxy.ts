import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const { pathname, host } = url

  // Redirect www → non-www
  if (host.startsWith('www.')) {
    url.host = host.replace(/^www\./, '')
    return NextResponse.redirect(url, { status: 301 })
  }

  // Enforce trailing slashes on all paths except files and API routes
  if (
    !pathname.endsWith('/') &&
    !pathname.includes('.') &&
    !pathname.startsWith('/api/') &&
    !pathname.startsWith('/_next/')
  ) {
    url.pathname = `${pathname}/`
    return NextResponse.redirect(url, { status: 301 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)',
  ],
}
