"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssue = () => {
  return (
    <>
      <div className="flex  flex space-y-2 space-x-4 max-w-xl">
        <h1 className=" ">NewIssue</h1>
        <TextField.Input placeholder="Input the Issue Title here..." />
        <TextArea placeholder="Input the Issue Description here..." />
        <Button>Create New Issue</Button>
      </div>
    </>
  );
};

export default NewIssue;
