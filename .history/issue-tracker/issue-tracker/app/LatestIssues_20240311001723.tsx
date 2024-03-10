import React from "react";
import prisma from "@/prisma/client";
const LatestIssues = () => {
  prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });
  prisma;
  return <div></div>;
};

export default LatestIssues;
