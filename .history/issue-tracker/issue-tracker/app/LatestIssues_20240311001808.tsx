import React from "react";
import prisma from "@/prisma/client";
const LatestIssues = () => {
  const issues = prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });
  prisma;
  return <Table>;
};

export default LatestIssues;
