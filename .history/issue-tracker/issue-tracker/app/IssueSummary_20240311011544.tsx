import { Status } from "@prisma/client";
import { Card, Flex } from "@radix-ui/themes";
import Link from "next/link";
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
    { label: "Closed Issue", value: closed, status: "CLOSED" },
  ];
  return (
    <Flex>
      {statuses.map((s) => (
        <Card key={s.label}>
          <Flex direction="column">
            <Link href={`/issues/`}>{s.label}</Link>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
