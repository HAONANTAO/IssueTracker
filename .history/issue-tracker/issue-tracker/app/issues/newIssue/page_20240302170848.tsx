"use client";
import { TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssue = () => {
  return (
    <>
      <div className="flex flex-col items-center space-y-2 space-x-4">
        <span className=" ">NewIssue</span>
        <TextField.Input placeholder="Input the Issue Title here..." />
        <TextArea placeholder="Input the Issue Description here..." />
      </div>
    </>
  );
};

export default NewIssue;
