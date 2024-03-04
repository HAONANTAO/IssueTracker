import React from "react";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

const IssueDetailsPage = () => {
  const issueDetails = prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  return <>IssueDetailsPage</>;
};

export default IssueDetailsPage;
