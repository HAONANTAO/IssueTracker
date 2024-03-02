import { Button } from "@radix-ui/themes";
import React from "react";

const Issue = () => {
  return (
    <div>
      <span className="flex">Issues</span>
      <Button>
        <a href="/newIssue">Create New Issue</a>
      </Button>
    </div>
  );
};

export default Issue;
