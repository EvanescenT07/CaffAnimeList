import { PrismaClient } from "@prisma/client";

let prisma;

if (process.env.N0DE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
