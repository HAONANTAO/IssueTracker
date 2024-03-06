import { Box } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";
import import { Skeleton } from "../components/Loading";
const IssueFormSkeleton = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton height="20rem" />
    </Box>
  );
};

export default IssueFormSkeleton;
