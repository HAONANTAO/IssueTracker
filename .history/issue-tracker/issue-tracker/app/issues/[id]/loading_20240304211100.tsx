import React from "react";
import prisma from "@/prisma/client";
const IssueDetailsPageLoading = (parm) => {
  const issueDetails = prisma.issue.findUnique({
    where: { id: body.id },
  });
  return <div>Loading...</div>;
};

export default IssueDetailsPageLoading;
