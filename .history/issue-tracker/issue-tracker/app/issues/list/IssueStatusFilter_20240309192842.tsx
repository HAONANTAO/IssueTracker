import { Select, SelectTrigger } from "@radix-ui/themes";
import React from "react";

const IssueStatusFilter = () => {
  return (
    <Select.Root>
      <SelectTrigger></SelectTrigger>
    </Select.Root>
  );
};

export default IssueStatusFilter;
