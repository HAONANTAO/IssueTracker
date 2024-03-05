import { Issue } from "@prisma/client";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

interface Props {
  issueDetails: Issue;
}
const EditPageButton = () => {
  return (
    <Button>
      <Pencil2Icon></Pencil2Icon>
      <Link href={`api/issues/edit${issueDetails.id}`}>Edit pages</Link>
    </Button>
  );
};

export default EditPageButton;
