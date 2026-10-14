import { connection } from "next/server";
import { prisma } from "@/lib/prisma";
import { course } from "@/lib/course";

// PY51.10: route kiem tra ket noi MySQL (Remote) sau khi deploy len Vercel.
export default async function DbCheckPage() {
  await connection(); // render luc request (khong prerender luc build -> build khong can DB)
  const userCount = await prisma.user.count();

  return (
    <main className="p-8">
      <h1 className="text-xl font-bold">{course.title}</h1>
      <p className="mt-2">Kết nối MySQL thành công ✅ — bảng User có {userCount} bản ghi.</p>
      <p className="text-sm text-gray-500">DB host: {new URL(process.env.DATABASE_URL ?? "mysql://unknown").hostname}</p>
    </main>
  );
}
