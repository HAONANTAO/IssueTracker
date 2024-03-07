import { Issue } from "@prisma/client";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
  issueDetails: Issue;
}
const EditPageButton = ({ issueDetails }: {Props}) => {
  return (
    <Button>
      <Pencil2Icon></Pencil2Icon>
      <Link href={`/issues/${issueDetails.id}/edit`}>Edit pages</Link>
    </Button>
  );
};

export default EditPageButton;
