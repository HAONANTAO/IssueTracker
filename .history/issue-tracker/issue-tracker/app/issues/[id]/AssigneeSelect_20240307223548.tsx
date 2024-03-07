"use client";
import { Select } from "@radix-ui/themes";
import React from "react";

const AssigneeSelect = () => {
  await axios.get
  return (
    <Select.Root>
      <Select.Trigger placeholder="Assign Issue..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Members</Select.Label>
          <Select.Item value="Aaron">Aaron</Select.Item>
        </Select.Group>
        <Select.Separator />
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;
