import { Status } from "@prisma/client";
import { Select, SelectTrigger } from "@radix-ui/themes";
import React from "react";

const statuses: { label: string; value: Status }[] = [
  { label: "All", value: "" },
  { label: "Open", value: "OPEN" },
  { label: "All", value: "" },
  { label: "All", value: "" },
];
const IssueStatusFilter = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="filter by status ...">
        <Select.Content></Select.Content>
      </Select.Trigger>
    </Select.Root>
  );
};

export default IssueStatusFilter;
