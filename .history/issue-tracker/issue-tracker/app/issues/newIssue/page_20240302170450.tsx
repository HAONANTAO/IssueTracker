"use client";
import { TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssue = () => {
  return (
    <>
      <div className="mx-2 space-4">
        <span>NewIssue</span>
        <TextField.Input placeholder="Input the Issue Title here..." />
        <TextArea placeholder="Input the Issue Description here..." />
      </div>
    </>
  );
};

export default NewIssue;
