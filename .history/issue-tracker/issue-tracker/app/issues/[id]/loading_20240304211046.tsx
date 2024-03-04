import React from "react";
import prisma from "@/prisma/client";
const IssueDetailsPageLoading = () => {

  const issueDetails = prisma.issue.findUnique({
    
  })
  return <div>Loading...</div>;
};

export default IssueDetailsPageLoading;
