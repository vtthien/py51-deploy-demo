// Script phu: chay 1 lan de tao user mau voi mat khau da hash
// Cach chay: npx tsx scripts/create-sample-user.ts
// Dung upsert de chay lai nhieu lan khong bi loi trung email (Unique constraint)
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

async function main() {
  const hashed = await bcrypt.hash("123", 10);
  const user = await prisma.user.upsert({
    where: { email: "thien@example.com" },
    update: { password: hashed },
    create: {
      name: "Thien",
      email: "thien@example.com",
      password: hashed,
    },
  });
  console.log("Da tao user mau:", user);
}

main().finally(() => prisma.$disconnect());
