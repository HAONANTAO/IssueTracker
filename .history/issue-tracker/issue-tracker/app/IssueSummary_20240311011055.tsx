import { Status } from "@prisma/client";
import { Flex } from "@radix-ui/themes";
import React from "react";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}
const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const statuses: {
    label: string;
    value: number;
    status: Status;
  }[] = [
    { label: "Open Issue", value: open, status: "OPEN" },
    { label: "Open Issue", value: inProgress, status: "" },
    { label: "Open Issue", value: open, status: "OPEN" },
  ];
  return <Flex></Flex>;
};

export default IssueSummary;
