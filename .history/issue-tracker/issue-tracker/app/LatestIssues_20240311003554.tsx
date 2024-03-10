import React from "react";
import prisma from "@/prisma/client";
import { Card, Flex, Table } from "@radix-ui/themes";
import StatusBadge from "./components/StatusBadge";
import Link from "next/link";
const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });
  prisma;
  return (
    <Card>
      <Head
      <Table.Root>
        <Table.Body>
          {issues.map((i) => (
            <Table.Row key={i.id}>
              <Table.Cell>
                <Flex direction="column" align="start" gap="2">
                  <Link href={`/issues/${i.id}`}>{i.title}</Link>
                  <StatusBadge status={i.status}></StatusBadge>
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default LatestIssues;
