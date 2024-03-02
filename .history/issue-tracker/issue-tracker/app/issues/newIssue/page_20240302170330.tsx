"use client";
import { TextField } from "@radix-ui/themes";
import React from "react";

const NewIssue = () => {
  return (
    <>
      <div>
        <span className="">NewIssue</span>
        <TextField.Input placeholder="Search the docs…" />
        <TextArea placeholder="Reply to comment…" />
      </div>
    </>
  );
};

export default NewIssue;
