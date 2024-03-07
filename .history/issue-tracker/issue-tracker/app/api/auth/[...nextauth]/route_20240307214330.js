import NextAuth from "next-auth";
import AuthOptions from "../"

const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };
