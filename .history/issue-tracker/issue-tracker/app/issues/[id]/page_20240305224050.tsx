import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import StatusBadge from "@/app/components/StatusBadge";
import ReactMarkdown from "react-markdown";
import delay from "delay";
import Link from "next/link";
import { Pencil2Icon, Cross2Icon } from "@radix-ui/react-icons";
interface Props {
  params: { id: string };
}
import IssueDetails from "../components/IssueDetails";
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
       
        <Box className=" space-x-4 px-4">
        
          <Button>
            <Cross2Icon></Cross2Icon>
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
