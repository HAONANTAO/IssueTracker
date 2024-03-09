import { Status } from "@prisma/client";
import { Select, SelectTrigger } from "@radix-ui/themes";
import React from "react";

const statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];
const IssueStatusFilter = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="filter by status ...">
        <Select.Content>
          {statuses.map((s) => {
            <Select.Item></Select.Item>;
          })}
        </Select.Content>
      </Select.Trigger>
    </Select.Root>
  );
};

export default IssueStatusFilter;
