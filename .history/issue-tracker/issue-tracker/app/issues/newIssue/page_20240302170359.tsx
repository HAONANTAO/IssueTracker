"use client";
import { TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssue = () => {
  return (
    <>
      <div>
        <span className="">NewIssue</span>
        <TextField.Input placeholder="Input the Issue Title" />
        <TextArea placeholder="Input the Issue Description here..." />
      </div>
    </>
  );
};

export default NewIssue;
