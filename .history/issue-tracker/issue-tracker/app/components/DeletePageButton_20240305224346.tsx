import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const DeletePageButton = () => {
  return (
    <Button>
      <Cross2Icon></Cross2Icon>
      <Link href={`api/issues/delete${issueDetails.id}`}>Delete pages</Link>
    </Button>
  );
};

export default DeletePageButton;
