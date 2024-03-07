"use client";
import { User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";

const AssigneeSelect = () => {
  const [users, SetUsers] = useState<User[]>([]);
  useEffect(() => {
   const getUsers =()=>{
     await axios.get("/api/users");
   }
  }, []);
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
