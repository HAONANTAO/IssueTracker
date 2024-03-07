import { PrismaAdapter } from "@next-auth/prisma-adapter";
import React from "react";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const AuthOptions = () => {
  return {
    adapter: PrismaAdapter(prisma),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    session: {
      strategy: "jwt",
    },
  };
};

export default AuthOptions;
