import { Button } from "@radix-ui/themes";
import React from "react";
import Link from "next/link";
const NewIssueButton = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <span>All Issues</span>
      </div>
      <Button>
        <Link href="/newIssue">Create New Issue</Link>
      </Button>
    </>
  );
};

export default NewIssueButton;
