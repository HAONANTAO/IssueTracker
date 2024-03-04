import React from "react";
import prisma from "@/prisma/client";

interface Props {
  params: { id: String };
}
const IssueDetailsPageLoading = ({ params }: Props) => {
  const issueDetails = prisma.issue.findUnique({
    where: { id: parseInt()params.id },
  });
  return <div>Loading...</div>;
};

export default IssueDetailsPageLoading;
