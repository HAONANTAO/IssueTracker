import React from "react";
import prisma from "@/prisma/client";
const IssueDetailsPageLoading = (params) => {
  const issueDetails = prisma.issue.findUnique({
    where: { id: body.id },
  });
  return <div>Loading...</div>;
};

export default IssueDetailsPageLoading;
