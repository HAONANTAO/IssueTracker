import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import StatusBadge from "@/app/components/StatusBadge";
import ReactMarkdown from "react-markdown";
import delay from "delay";
interface Props {
  params: { id: string };
}

const IssueDetailsPage = async ({ params }: Props) => {
  await delay(2000);
  // if (typeof parseInt(params.id) !== "number") return notFound();
  const issueDetails = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issueDetails) return notFound();

  return (
    <div>
      <Box>
        <Heading>{issueDetails.title}</Heading>{" "}
        <StatusBadge status={issueDetails.status}></StatusBadge>{" "}
        <Text>{issueDetails.updatedAt.toDateString()}</Text>
        <Flex className="gap-2 mx-2 my-2 flex-col">
          <Card className="prose mt-2">
            <ReactMarkdown>{issueDetails.description}</ReactMarkdown>
          </Card>
        </Flex>
      </Box>
      <Box>
        <Button
      </Box>
    </div>
  );
};

export default IssueDetailsPage;
