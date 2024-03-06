import React from "react";
import IssueForm from "../components/IssueForm";
import dynamic from "next/dynamic";

const IssueForm = dynamic(() => import("../components/IssueForm"), { ssr: false });

const NewIssue = () => {
  return <IssueForm></IssueForm>;
};

export default NewIssue;
