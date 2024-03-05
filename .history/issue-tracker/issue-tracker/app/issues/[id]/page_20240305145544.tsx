import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Heading } from "@radix-ui/themes";

interface Props {
  params: { id: string };
}

const IssueDetailsPage = async ({ params }: Props) => {
  if (typeof params.id !== "number") return notFound();
  const issueDetails = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issueDetails) return notFound();

  return (
    <div>
      <Heading></Heading>
      <p>{issueDetails.id}</p>
      <p>{issueDetails.title}</p>
      <p>{issueDetails.description}</p>
      <p>{issueDetails.updatedAt.toDateString()}</p>
    </div>
  );
};

export default IssueDetailsPage;
