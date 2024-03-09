"use client";
import { Status } from "@prisma/client";
import { Select, SelectTrigger } from "@radix-ui/themes";
import React from "react";
import { useRouter } from "next/router";
const statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const IssueStatusFilter = () => {
  const router = useRouter();
  return (
    <Select.Root
      onValueChange={(status) => {
        const query = status ? `?status=${status}` : "";
        router.push("/issues" + query);
      }}>
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
