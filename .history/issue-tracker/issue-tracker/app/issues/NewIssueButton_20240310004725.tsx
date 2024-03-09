import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import IssueStatusFilter from "./list/IssueStatusFilter";
const NewIssueButton = () => {
  return (
    <>
      <Flex justify="between">
        <IssueStatusFilter />
        <Button>
          <Link href="/newIssue">Create New Issue</Link>
        </Button>
      </Flex>
    </>
  );
};

export default NewIssueButton;
