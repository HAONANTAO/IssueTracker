import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import StatusBadge from "@/app/components/StatusBadge";
import ReactMarkdown from "react-markdown";
import delay from "delay";
import Link from "next/link";
import {pen} from "@radix-ui/react-icons"
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
      <Grid columns={{ initial: "1", md: "2" }}>
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
        <Box className=" space-x-4 px-4">
          <Button>
            <Link href={`api/issues/edit${issueDetails.id}`}>Edit pages</Link>
          </Button>
          <Button>
            <Link href={`api/issues/delete${issueDetails.id}`}>
              Delete pages
            </Link>
          </Button>
        </Box>
      </Grid>
    </div>
  );
};

export default IssueDetailsPage;
