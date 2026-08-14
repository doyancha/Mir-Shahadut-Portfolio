import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

declare global {
  var __prismaClient: PrismaClient | undefined;
}

const prismaLogLevels: Array<"warn" | "error"> =
  process.env.NODE_ENV === "production" ? ["error"] : ["warn", "error"];
const connectionString = process.env["DATABASE_URL"];

if (!connectionString) {
  throw new Error("DATABASE_URL is required to initialize the Prisma client.");
}

const adapter = new PrismaPg({ connectionString });

export const prisma =
  globalThis.__prismaClient ??
  new PrismaClient({
    adapter,
    log: prismaLogLevels,
  });

if (process.env.NODE_ENV !== "production") {
  globalThis.__prismaClient = prisma;
}

export default prisma;
