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
    { label: "In Progress Issue", value: inProgress, status: "IN_PROGRESS" },
    { label: "Open Issue", value: closed, status: "CLOSED" },
  ];
  return <Flex></Flex>;
};

export default IssueSummary;
