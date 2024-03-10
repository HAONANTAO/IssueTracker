import React from "react";
import prisma from "@/prisma/client";
import { Table } from "@radix-ui/themes";
const LatestIssues = () => {
  const issues = prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });
  prisma;
  return (
    <Table.Root>
      <Table.Body>
        {issues.map((i) => (
          <Table.Row key={i.id}>
            <Table.Cell>{i.title}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default LatestIssues;
