'use client';

import { useEffect } from "react";

export default function EnvClientDemo() {
  useEffect(() => {
    // Chi hien o Console trinh duyet (Client)
    console.log("[Client] MY_SECRET:", process.env.MY_SECRET); // ky vong: undefined
    console.log("[Client] NEXT_PUBLIC_GREETING:", process.env.NEXT_PUBLIC_GREETING); // ky vong: 'Hello Bootcamp'
  }, []);

  return <p className="mt-2 text-sm text-gray-500">(Xem log ở Console trình duyệt)</p>;
}
