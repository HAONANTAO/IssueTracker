"use client";
import { Skeleton } from "@/app/components/Loading";
import { User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//use queryFn fetch data and store in cache!!!(client side)
const AssigneeSelect = ({iss}) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 1000, //60s
    retry: 3, // up to 3 times
  });
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
    <Select.Root
      onValueChange={async (userId) => {
        await axios.patch(`api/issues${userId}/edit`);
      }}>
      <Select.Trigger placeholder="Assign Issue..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Members</Select.Label>
          {users?.map((u) => (
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
