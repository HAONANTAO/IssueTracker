import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const IssueDetailsPage = async ({ params }: Props) => {
  const issueDetails = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issueDetails) return notFound();
  if(
  return (
    <div>
      <p>{issueDetails.id}</p>
      <p>{issueDetails.title}</p>
      <p>{issueDetails.description}</p>
      <p>{issueDetails.updatedAt.toDateString()}</p>
    </div>
  );
};

export default IssueDetailsPage;
