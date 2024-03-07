import NextAuth from "next-auth";


const handler = NextAuth(Auth);

export { handler as GET, handler as POST };
