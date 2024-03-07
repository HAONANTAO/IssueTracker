import React from 'react'

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
}

export default AuthOptions
function PrismaAdapter(prisma: import(".prisma/client").PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import("@prisma/client/runtime/library").DefaultArgs> | undefined) {
  throw new Error('Function not implemented.');
}

function GoogleProvider(arg0: { clientId: string | undefined; clientSecret: string | undefined; }) {
  throw new Error('Function not implemented.');
}

