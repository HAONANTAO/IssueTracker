import { Select, SelectTrigger } from "@radix-ui/themes";
import React from "react";

const IssueStatusFilter = () => {
  return (
    <Select.Root>
      <SelectTrigger placeholder="filter by status ...">
        <Select.Content></Select.Content>
      </SelectTrigger>
    </Select.Root>
  );
};

export default IssueStatusFilter;
