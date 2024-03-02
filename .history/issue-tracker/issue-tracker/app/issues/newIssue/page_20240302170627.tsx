"use client";
import { TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssue = () => {
  return (
    <>
      <div className="mx-4">
        <div className="items-center">NewIssue</div>
        <TextField.Input placeholder="Input the Issue Title here..." />
        <TextArea placeholder="Input the Issue Description here..." />
      </div>
    </>
  );
};

export default NewIssue;
