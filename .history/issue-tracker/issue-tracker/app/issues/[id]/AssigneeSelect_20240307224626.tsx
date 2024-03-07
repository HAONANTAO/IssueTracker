"use client";
import { User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import React, { useEffect, useState } from "react";

const AssigneeSelect = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const getUsers = async () => {
      const users = await axios.get("/api/users");
      return users;
    };
    const users = getUsers();
    SetUsers(users);
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
