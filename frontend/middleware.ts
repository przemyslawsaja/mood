import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAuthorized = true;

  if (!isAuthorized) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.redirect(new URL("/dashboard", request.url));
}

export const config = {
  matcher: "/",
};
