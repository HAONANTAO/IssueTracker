import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
const handler = NextAuth({
  providers,:[]
});

export { handler as GET, handler as POST };
