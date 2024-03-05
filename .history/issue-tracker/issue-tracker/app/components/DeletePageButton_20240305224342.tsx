import React from "react";

const DeletePageButton = () => {
  return (
    <Button>
      <Cross2Icon></Cross2Icon>
      <Link href={`api/issues/delete${issueDetails.id}`}>Delete pages</Link>
    </Button>
  );
};

export default DeletePageButton;
