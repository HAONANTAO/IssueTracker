import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
const NewIssueButton = () => {
  return (
    <>
      <Flex className="flex items-center justify-center">
        All Issues
        <Button>
          <Link href="/newIssue">Create New Issue</Link>
        </Button>
      </Flex>
    </>
  );
};

export default NewIssueButton;
