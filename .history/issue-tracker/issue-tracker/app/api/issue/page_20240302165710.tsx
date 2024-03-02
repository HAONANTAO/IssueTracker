import { Button } from "@radix-ui/themes";
import React from "react";

const Issue = () => {
  return (
    <div>
      <div>Issue</div>
      <Button>
        <a href="/newIssue">Create New Issue</a>
      </Button>
    </div>
  );
};

export default Issue;
