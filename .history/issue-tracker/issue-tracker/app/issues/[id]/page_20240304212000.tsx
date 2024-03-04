import React from "react";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

const IssueDetailsPage = async ({ params }: Props) => {
  const issueDetails = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if(!)
  return (
    <div>
      <p>{issueDetails.description}</p>
      <p></p>
      <p></p>
      <p></p>
    </div>
  );
};

export default IssueDetailsPage;
