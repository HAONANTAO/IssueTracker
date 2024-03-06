"use client";
import { Issue } from "@prisma/client";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button, Flex, AlertDialog } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

interface Props {
  issueDetails: Issue;
}
const DeletePageButton = ({ issueDetails }: Props) => {
  const HandleDelete = (id: string) => {};

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">
          <Cross2Icon></Cross2Icon>
          <Link href={`api/issues/delete${issueDetails.id}`}>Delete pages</Link>
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
              onClick={() => {
                HandleDelete(issueDetails.id);
              }}>
              Confirm Delete
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeletePageButton;
