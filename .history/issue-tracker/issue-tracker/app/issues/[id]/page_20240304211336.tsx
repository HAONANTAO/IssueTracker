import React from "react";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}
const issueDetails = prisma.issue.findUnique({
  where: { id: parseInt(params.id) },
});
const IssueDetailsPage = () => {
  return <>IssueDetailsPage</>;
};

export default IssueDetailsPage;
