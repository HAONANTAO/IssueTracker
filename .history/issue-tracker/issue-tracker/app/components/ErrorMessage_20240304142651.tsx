import React, { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  return <p>{children}</p>;
};

export default ErrorMessage;
