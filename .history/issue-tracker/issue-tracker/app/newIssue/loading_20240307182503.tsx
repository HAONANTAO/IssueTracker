import { Box, Card } from "@radix-ui/themes";
import React from "react";

import { Skeleton } from "../components/Loading";
const loading = () => {
  return (
    <div className="max-w-xl">
      <form>
        <div className="flex items-center justify-center">
          <Skeleton></Skeleton>
        </div>
        <Skeleton width="max-w-full"></Skeleton>

        <Skeleton width="max-w-full" height="400px"></Skeleton>
        <br />
        <Skeleton width="max-w-full"></Skeleton>
      </form>
    </div>
  );
};

export default loading;
