import { NextResponse, type NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

import {
  adminAuthSecret,
  adminDashboardPath,
  adminSignInPath,
  adminUnauthorizedPath,
  hasConfiguredAdminAuth,
  isAdminTokenAuthorized,
} from "@/lib/admin/auth-policy";

const ADMIN_ROUTE_PREFIX = "/admin";

export async function proxy(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  if (!pathname.startsWith(ADMIN_ROUTE_PREFIX)) {
    return NextResponse.next();
  }

  const isPublicAdminRoute = pathname === adminSignInPath || pathname === adminUnauthorizedPath;

  if (!hasConfiguredAdminAuth) {
    if (isPublicAdminRoute) {
      return NextResponse.next();
    }

    const signInUrl = new URL(adminSignInPath, req.url);
    signInUrl.searchParams.set("callbackUrl", `${pathname}${search}`);
    return NextResponse.redirect(signInUrl);
  }

  const token = await getToken({ req, secret: adminAuthSecret ?? undefined });

  if (isPublicAdminRoute) {
    if (isAdminTokenAuthorized(token)) {
      return NextResponse.redirect(new URL(adminDashboardPath, req.url));
    }

    return NextResponse.next();
  }

  if (!isAdminTokenAuthorized(token)) {
    if (!token?.id || !token.role || !token.status) {
      const signInUrl = new URL(adminSignInPath, req.url);
      signInUrl.searchParams.set("callbackUrl", `${pathname}${search}`);
      return NextResponse.redirect(signInUrl);
    }

    return NextResponse.redirect(new URL(adminUnauthorizedPath, req.url));
  }

  return NextResponse.next();
}

export default proxy;

export const config = {
  matcher: ["/admin/:path*"],
};
