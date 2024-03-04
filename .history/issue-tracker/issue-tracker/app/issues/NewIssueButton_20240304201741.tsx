import React from "react";

const NewIssueButton = () => {
  return (
    <>
      {" "}
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
