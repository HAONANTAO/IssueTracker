import { SessionProvider } from "next-auth/react";
import React, { PropsWithChildren } from "react";

const AuthProvider = ({ children }: PropsWithChildren) => {
  return <SessionProvider></SessionProvider>;
};

export default AuthProvider;
