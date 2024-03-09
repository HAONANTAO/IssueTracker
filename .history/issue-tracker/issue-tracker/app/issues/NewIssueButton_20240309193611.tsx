import { Button } from "@radix-ui/themes";
import Link from "next/link";
const NewIssueButton = () => {
  return (
    <>
      <Flex className="flex items-center justify-center">
        <span>All Issues</span>

        <Button>
          <Link href="/newIssue">Create New Issue</Link>
        </Button>
      </Flex>
    </>
  );
};

export default NewIssueButton;
