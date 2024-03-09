import { Status } from "@prisma/client";
import { Select, SelectTrigger } from "@radix-ui/themes";
import React from "react";

const statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "IN_PROGRESS", value: "IN_PROGRESS" },
  { label: "CLOSED", value: "CLOSED" },
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
