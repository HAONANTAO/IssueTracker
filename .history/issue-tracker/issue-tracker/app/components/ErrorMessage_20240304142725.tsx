import React, { PropsWithChildren } from "react";
import { Text, TextField } from "@radix-ui/themes";
const ErrorMessage = ({ children }: PropsWithChildren) => {
  return <Text as="p" color="red">{children}</Text>;
};

export default ErrorMessage;
