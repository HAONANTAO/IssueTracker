import { Box, Skeleton } from "@radix-ui/themes";
import React from "react";

const IssueFormSkeleton = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton/></Skeleton>
      <Skeleton height="20rem"/></Skeleton>
    </Box>
  );
};

export default IssueFormSkeleton;
