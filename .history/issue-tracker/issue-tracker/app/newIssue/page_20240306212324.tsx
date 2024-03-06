import React from "react";
import IssueForm from "../components/IssueForm";
import dynamic from "next/dynamic";

const;
IssueForm;=dynamic(
  ()=>import ("../components/IssueForm")
)

const NewIssue = () => {
  return <IssueForm></IssueForm>;
};

export default NewIssue;
