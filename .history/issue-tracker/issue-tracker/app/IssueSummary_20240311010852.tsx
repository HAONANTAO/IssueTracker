import { Flex } from "@radix-ui/themes";
import React from "react";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}
const IssueSummary = ({}) => {
  const statuses = [{ label: "Open Issue", value: "" }];
  return <Flex></Flex>;
};

export default IssueSummary;
