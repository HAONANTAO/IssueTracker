import { Box } from "@radix-ui/themes";
import React from "react";

import { Skeleton } from "../components/Loading";
const IssueFormSkeleton = () => {
  return (
    <></>
    <Box className="max-w-xl">
      <Skeleton /> 
      <Skeleton />
      <Skeleton height="20rem" />
    </Box>
  );
};

export default IssueFormSkeleton;
