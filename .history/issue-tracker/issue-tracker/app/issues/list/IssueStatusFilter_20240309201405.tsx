"use client";
import { Status } from "@prisma/client";
import { Select, SelectTrigger } from "@radix-ui/themes";
import React from "react";
import useRou
const statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];
const router = new Router();
const IssueStatusFilter = () => {
  return (
    <Select.Root onValueChange={(status) => {}}>
      <Select.Trigger placeholder="filter by status ..." />
      <Select.Content>
        {statuses.map((s) => (
          <Select.Item key={s.value} value={s.value || "All"}>
            {s.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
