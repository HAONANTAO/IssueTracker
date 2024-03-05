import React from "react";
import NextLink from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";

interface Props {
  href: string;
  children: string;
}
const SelfLink = ({ href, children }: Props) => {
  return (
    <>
      <NextLink>{children}</NextLink>
    </>
  );
};

export default SelfLink;
