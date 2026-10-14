// Next.js 16: "proxy.ts" thay cho "middleware.ts" (middleware da bi deprecated).
// - Phai dat trong src/ (ngang hang voi src/app) khi project dung --src-dir,
//   neu dat o goc project thi Next.js bo qua file nay.
// - proxy chay tren Node.js runtime nen dung duoc Prisma (PrismaAdapter).
//   middleware.ts chay tren Edge runtime -> Prisma bao loi
//   "In order to run Prisma Client on edge runtime..." va user da login van bi da ra.
import { auth } from "@/../auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");

  if (isAdminRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }
});

export const config = {
  matcher: "/admin/:path*",
};
