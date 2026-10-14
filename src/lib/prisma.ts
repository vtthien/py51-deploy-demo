import { PrismaClient } from "@prisma/client";

// Tranh tao nhieu PrismaClient khi Next.js hot-reload trong dev mode
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
