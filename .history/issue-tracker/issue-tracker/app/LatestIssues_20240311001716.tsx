import React from "react";
import prisma from "@/prisma/client";
const LatestIssues = () => {
  prisma.issue.findMany({
    orderBy: {createdAt:""}
  });
  prisma;
  return <div></div>;
};

export default LatestIssues;
