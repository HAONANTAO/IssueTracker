import React from "react";
import prisma from "@/prisma/client";

interface Props{
  
}
const IssueDetailsPageLoading = ({ params }: Props) => {
  const issueDetails = prisma.issue.findUnique({
    where: { id: body.id },
  });
  return <div>Loading...</div>;
};

export default IssueDetailsPageLoading;
