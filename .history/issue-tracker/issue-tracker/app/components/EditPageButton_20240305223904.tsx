import React from "react";

const EditPageButton = () => {
  return (
    <Button>
      <Pencil2Icon></Pencil2Icon>
      <Link href={`api/issues/edit${issueDetails.id}`}>Edit pages</Link>
    </Button>
  );
};

export default EditPageButton;
