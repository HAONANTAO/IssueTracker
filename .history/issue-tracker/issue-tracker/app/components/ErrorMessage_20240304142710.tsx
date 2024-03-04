import React, { PropsWithChildren } from "react";

const ErrorMessage = ({ children }: PropsWithChildren) => {
  return <Text as="p" color="red">{children}</Text>;
};

export default ErrorMessage;
