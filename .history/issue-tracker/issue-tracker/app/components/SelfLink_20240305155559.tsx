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
      <RadixLink>
        <NextLink href={href}>{children}</NextLink>
      </RadixLink>
    </>
  );
};

export default SelfLink;
