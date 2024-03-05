import { Box, Card } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const loading = () => {
  return (
    <Box>
      <Skeleton />
      <Skeleton />
      <Card>
        <Skeleton count={5} />
      </Card>
    </Box>
  );
};

export default loading;
