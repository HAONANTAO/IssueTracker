import { Box } from "@radix-ui/themes";
import React from "react";

import { Skeleton } from "../components/Loading";
const IssueFormSkeleton = () => {
  return (
    <>
      <Box className="max-w-xl">
        {" "}
        <div className="flex  justify-center">
          <Skeleton width="150px" />
        </div>
        <Skeleton />
        <Skeleton height="20rem" />
      </Box>
      <Skeleton height="20rem" />
    </>
  );
};

export default IssueFormSkeleton;
