import { Issue } from "@prisma/client";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

interface Props {
  issueDetails: Issue;
}
const EditPageButton = ({ issueDetails }: Props) => {
  console.log(issueDetails.id);
  return (
    <Button onClick={}>
      <Pencil2Icon></Pencil2Icon>
      <Link href={`issues/${issueDetails.id}/edit`}>Edit pages</Link>
    </Button>
  );
};

export default EditPageButton;
