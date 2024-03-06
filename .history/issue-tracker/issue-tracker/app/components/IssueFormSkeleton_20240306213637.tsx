import { Box, Skeleton } from "@radix-ui/themes";
import React from "react";

const IssueFormSkeleton = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton height=20 />
    </Box>
  );
};

export default IssueFormSkeleton;
