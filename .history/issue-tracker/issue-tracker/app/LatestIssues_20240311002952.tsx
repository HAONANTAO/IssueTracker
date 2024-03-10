import React from "react";
import prisma from "@/prisma/client";
import { Flex, Link, Table } from "@radix-ui/themes";
import StatusBadge from "./components/StatusBadge";
const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });
  prisma;
  return (
    <Table.Root>
      <Table.Body>
        {issues.map((i) => (
          <Table.Row key={i.id}>
            <Table.Cell>
              <Flex direction="column" align={start}>
                <Link href={`/issues/${i.id}`}>{i.title}</Link>
                <StatusBadge status={i.status}></StatusBadge>
              </Flex>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default LatestIssues;
