'use client';

import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="p-4 flex justify-between items-center bg-gray-100">
      <span className="font-bold">MyApp</span>

      {status === "loading" && <span>Đang tải...</span>}

      {status === "authenticated" && session?.user && (
        <div className="flex items-center gap-2">
          <span>Xin chào, {session.user.name}</span>
          <button onClick={() => signOut()} className="text-sm text-red-600">
            Đăng xuất
          </button>
        </div>
      )}

      {/* PY48.40: auth.ts chi con Credentials -> signIn() khong truyen provider,
          Auth.js tu chuyen ve trang pages.signIn ("/login") */}
      {status === "unauthenticated" && (
        <button onClick={() => signIn()} className="text-sm text-blue-600">
          Đăng nhập
        </button>
      )}
    </nav>
  );
}
