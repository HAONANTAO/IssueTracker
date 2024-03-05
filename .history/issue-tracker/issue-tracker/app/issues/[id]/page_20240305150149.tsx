import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Flex, Heading, Text } from "@radix-ui/themes";
import StatusBadge from "@/app/components/StatusBadge";

interface Props {
  params: { id: string };
}

const IssueDetailsPage = async ({ params }: Props) => {
  // if (typeof parseInt(params.id) !== "number") return notFound();
  const issueDetails = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issueDetails) return notFound();

  return (
    <div>
      <Heading>{issueDetails.title}</Heading>
      <Flex className="gap-2 mx-2 my-2">
        <StatusBadge status={issueDetails.status}></StatusBadge>
        <Text>{issueDetails.title}</Text>
        <p></p>
        <p>{issueDetails.description}</p>
        <p>{issueDetails.updatedAt.toDateString()}</p>
      </Flex>
    </div>
  );
};

export default IssueDetailsPage;
