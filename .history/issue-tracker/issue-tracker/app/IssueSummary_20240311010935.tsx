import { Flex } from "@radix-ui/themes";
import React from "react";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}
const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const statuses: {}[] = [{ label: "Open Issue", value: open, status: "" }];
  return <Flex></Flex>;
};

export default IssueSummary;
