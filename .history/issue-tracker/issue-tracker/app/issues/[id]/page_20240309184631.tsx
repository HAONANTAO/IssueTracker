import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Box, Button, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import StatusBadge from "@/app/components/StatusBadge";
import ReactMarkdown from "react-markdown";
import delay from "delay";
import Link from "next/link";
import { Pencil2Icon, Cross2Icon } from "@radix-ui/react-icons";
import IssueDetails from "../../components/IssueDetails";
import EditPageButton from "@/app/components/EditPageButton";
import DeletePageButton from "@/app/components/DeletePageButton";
import { getServerSession } from "next-auth";
import AuthOptions from "@/app/auth/AuthOptions";
import AssigneeSelect from "./AssigneeSelect";
interface Props {
  params: { id: string };
}

const IssueDetailsPage = async ({ params }: Props) => {
  const session = await getServerSession(AuthOptions);
  await delay(2000);
  // if (typeof parseInt(params.id) !== "number") return notFound();
  const issueDetails = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issueDetails) return notFound();

  return (
    <div>
      <Grid columns={{ initial: "1", md: "5" }} gap="5">
        <Box className="lg:col-span-4">
          <IssueDetails issueDetails={issueDetails}></IssueDetails>
        </Box>
        <Box className=" space-x-4 px-4 ">
          <Flex direction="column" gap="4">
            {" "}
            <AssigneeSelect issue={}></AssigneeSelect>
            <EditPageButton issueDetails={issueDetails}></EditPageButton>
            {session && (
              <DeletePageButton issueDetails={issueDetails}></DeletePageButton>
            )}
          </Flex>
        </Box>
      </Grid>
    </div>
  );
};

export default IssueDetailsPage;
