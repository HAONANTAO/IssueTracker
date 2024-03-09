import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
const NewIssueButton = () => {
  return (
    <>
      <Flex mb="5" justify="between">
        <Button>
          <Link href="/newIssue">Create New Issue</Link>
        </Button>
      </Flex>
    </>
  );
};

export default NewIssueButton;
