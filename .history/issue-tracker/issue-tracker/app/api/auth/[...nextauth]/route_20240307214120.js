import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();
const handler = NextAuth();

export { handler as GET, handler as POST };
