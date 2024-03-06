import { Issue, AlertDialog } from "@prisma/client";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

interface Props {
  issueDetails: Issue;
}
const DeletePageButton = ({ issueDetails }: Props) => {
  return (
    <AlertDialog.Root>
       <AlertDialog.Trigger></AlertDialog.Trigger>
      <Button color="red">
        <Cross2Icon></Cross2Icon>
        <Link href={`api/issues/delete${issueDetails.id}`}>Delete pages</Link>
      </Button>
    </AlertDialog.Root>
  );
};

export default DeletePageButton;
