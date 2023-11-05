// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { ACCESS_TOKEN_KEY } from "./utils/constant";

export default function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const accessTokenKey = cookieStore.get(ACCESS_TOKEN_KEY);
  const path = request.nextUrl.pathname;

  if (accessTokenKey && accessTokenKey.value) {
    if (path == "/login" || path == "/register" || path == "/") {
      return NextResponse.redirect(new URL("/stock", request.url));
    }

    return NextResponse.next({
      request,
    });
  } else if (path != "/login" && path != "/register") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next({
    request,
  });
}

export const config = {
  matcher: [
    "/",
    "/login/:path*",
    "/register/:path*",
    "/stock/:path*",
    "/report/:path*",
    "/aboutus/:path*",
    "/shop/:path*",
  ],
};
