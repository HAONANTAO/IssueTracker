"use client";
import { Skeleton } from "@/app/components/Loading";
import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
//use queryFn fetch data and store in cache!!!(client side)
const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const useUser
  const {
    data: users,
    error,
    isLoading,
  } = useUsers()
  if (isLoading) return <Skeleton></Skeleton>;
  if (error) return null;
  // const [users, setUsers] = useState<User[]>([]);
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const { data } = await axios.get<User[]>("/api/users");
  //     setUsers(data);
  //     return data;
  //   };
  //   getUsers();
  // }, []);
  return (
    <>
      <Select.Root
        defaultValue={issue.assignedToUserId || "null"}
        onValueChange={async (userId) => {
          const assignedToUserId = userId === "null" ? null : userId;
          await axios
            .patch(`/api/issues/${issue.id}/edit`, {
              assignedToUserId,
            })
            .catch((error) => toast.error("error"));
        }}>
        <Select.Trigger placeholder="Assign Issue..." />
        <Select.Content>
          <Select.Group>
            <Select.Label>Members</Select.Label>
            <Select.Item value="null">Unassigned</Select.Item>
            {users?.map((u) => (
              <Select.Item key={u.id} value={u.id}>
                {u.name}
              </Select.Item>
            ))}
          </Select.Group>
          <Select.Separator />
        </Select.Content>
      </Select.Root>
      <Toaster></Toaster>
    </>
  );
};

export default AssigneeSelect;
