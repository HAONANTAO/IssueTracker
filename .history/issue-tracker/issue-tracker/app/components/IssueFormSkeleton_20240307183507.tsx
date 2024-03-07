import { Box } from "@radix-ui/themes";
import React from "react";

import { Skeleton } from "../components/Loading";
const IssueFormSkeleton = () => {
  return (
    <>
      <div className="item">
        <Skeleton width="150px" />
      </div>

      <Box className="max-w-xl">
        <Skeleton />
        <Skeleton height="20rem" />
      </Box>
    </>
  );
};

export default IssueFormSkeleton;
