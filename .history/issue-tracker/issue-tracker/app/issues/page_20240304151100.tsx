import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssuesPage = () => {
  return (
    <div className="px-2 mx-2">
      <span className="flex mx-2 my-2">Issues</span>
      <Button>
        <Link href="/newIssue">Create New Issue</Link>
      </Button>
    </div>
  );
};

export default IssuesPage;
