import React from "react";
import NextLink from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";

interface Props {
  href: string;
  children: string;
}
const SelfLink = ({href,children}) => {
  return (
    <>
      <NextLink></NextLink>
    </>
  );
};

export default SelfLink;
