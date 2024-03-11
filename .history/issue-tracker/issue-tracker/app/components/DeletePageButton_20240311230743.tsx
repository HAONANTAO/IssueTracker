"use client";
import { Issue } from "@prisma/client";
import { Cross2Icon } from "@radix-ui/react-icons";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import delay from "delay";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Spinner from "./Spinner";

const DeletePageButton = ({ issueDetails }: { issueDetails: Issue }) => {
  const [error, setError] = useState(false);
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);
  const handleDelete = async () => {
    try {
      // throw new Error();setDeleting(true);
      await delay(1000);
      await axios.delete(`/api/issues/${issueDetails.id}`);

      router.push("/issues");
      router.refresh();
    } catch (error) {
      setDeleting(false);
      setError(true);
    }
  };
  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="red" disabled={deleting}>
            <Cross2Icon></Cross2Icon>
            Delete pages {deleting && <Spinner></Spinner>}
          </Button>
        </AlertDialog.Trigger>
        {/* content of dialog */}
        <AlertDialog.Content style={{ maxWidth: 450 }}>
          <AlertDialog.Title>Confirm to Delete </AlertDialog.Title>
          <AlertDialog.Description size="2">
            Are you sure to delete this issue?
          </AlertDialog.Description>

          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button
                variant="solid"
                color="red"
                onClick={() => handleDelete()}>
                Confirm Delete
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root open={error}>
        <AlertDialog.Content style={{ maxWidth: 450 }}>
          <AlertDialog.Title>Error Occurred </AlertDialog.Title>
          <AlertDialog.Description size="2">
            Can not delete this issue!
          </AlertDialog.Description>
          <Button variant="soft" color="gray" onClick={() => setError(false)}>
            Cancel
          </Button>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeletePageButton;
