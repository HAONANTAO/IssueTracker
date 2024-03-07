"use client";
import { User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

//use queryFn fetch data and store in client
const AssigneeSelect = () => {
  useQuery({
    queryKey: ["users"],
    queryFn:()=>axios.get("")
  });
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get<User[]>("/api/users");
      setUsers(data);
      return data;
    };
    getUsers();
  }, []);
  return (
    <Select.Root>
      <Select.Trigger placeholder="Assign Issue..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Members</Select.Label>
          {users.map((u) => (
            <Select.Item key={u.id} value={u.id}>
              {u.name}
            </Select.Item>
          ))}
        </Select.Group>
        <Select.Separator />
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;
