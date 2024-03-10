import React from "react";
import prisma from "@/prisma/client";
const LatestIssues = () => {
  prisma.issue.findMany({});
  prisma;
  return <div></div>;
};

export default LatestIssues;
