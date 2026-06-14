import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "lionfinance.co.nz";

function isProductionHost(hostname: string): boolean {
  const bare = hostname.split(":")[0];
  return bare === CANONICAL_HOST || bare === `www.${CANONICAL_HOST}`;
}

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") ?? "";
  const bareHost = hostname.split(":")[0];
  const proto = request.headers.get("x-forwarded-proto") ?? "https";

  // www → apex (308 permanent)
  if (bareHost.startsWith("www.")) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.hostname = CANONICAL_HOST;
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  // HTTP → HTTPS on production host only (skip localhost dev/test)
  if (isProductionHost(hostname) && proto === "http") {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.hostname = CANONICAL_HOST;
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.svg|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
