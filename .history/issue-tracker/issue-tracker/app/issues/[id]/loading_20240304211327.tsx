import React from "react";


const IssueDetailsPageLoading = ({ params }: Props) => {
  const issueDetails = prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  return <div>Loading...</div>;
};

export default IssueDetailsPageLoading;
