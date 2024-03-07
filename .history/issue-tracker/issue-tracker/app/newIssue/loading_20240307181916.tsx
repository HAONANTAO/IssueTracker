import { Box, Card } from "@radix-ui/themes";
import React from "react";

import { Skeleton } from "../components/Loading";
const loading = () => {
  return (
    <Box>
      <Skeleton></Skeleton>
    </Box>
  );
};

export default loading;
