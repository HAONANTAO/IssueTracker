import NextAuth from "next-auth";
import 

const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };
