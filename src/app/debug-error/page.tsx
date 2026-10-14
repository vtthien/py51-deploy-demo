// LUU Y: file nay CO CHU Y gay loi de thuc hanh doc Vercel Logs (Root Cause Analysis).
// KHONG dung code nay trong du an that - chi de mo phong 1 loi server that.
import { connection } from "next/server";
import { prisma } from "@/lib/prisma";

export default async function DebugErrorPage() {
  // Bat buoc render luc request. Neu thieu dong nay, Next.js prerender trang luc build
  // -> loi xay ra ngay trong `npm run build` (Build Failed) chu khong phai loi 500 luc chay.
  await connection();

  // Co tinh truy van 1 bang MySQL khong ton tai -> MySQL tra loi 1146:
  // "Table '<ten_db>.invalidtable' doesn't exist" (Prisma bao code P2010)
  const rows = await prisma.$queryRaw`SELECT * FROM InvalidTable`;

  return <pre>{JSON.stringify(rows)}</pre>;
}
