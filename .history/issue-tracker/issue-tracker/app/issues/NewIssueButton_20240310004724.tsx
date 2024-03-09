import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import IssueStatusFilter from "./list/IssueStatusFilter";
const NewIssueButton = () => {
  return (
    <>
      <Flexjustify="between">
        <IssueStatusFilter />
        <Button>
          <Link href="/newIssue">Create New Issue</Link>
        </Button>
      </Flexjustify=>
    </>
  );
};

export default NewIssueButton;
