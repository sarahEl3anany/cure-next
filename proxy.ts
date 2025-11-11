import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const pathname = request.nextUrl.pathname;
  const publicPaths = ["/sign-in", "/sign-up", "/forget-password", "/verify-code", "/change-password"];

  if (publicPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.next();
  }
  if (!token) {
    const signInUrl = new URL("/sign-in", request.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/auth|sign-in).*)"],
};
