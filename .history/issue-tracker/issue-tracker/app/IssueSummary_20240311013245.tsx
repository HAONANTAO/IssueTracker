import { Status } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
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
    <Flex gap="4">
      {statuses.map((s) => (
        <Card key={s.label}>
          <Flex direction="column">
            <Link className="texthref={`/issues?status=${s.status}`}>{s.label}</Link>
            <Text size="5" className="font-bold">
              {s.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummary;
