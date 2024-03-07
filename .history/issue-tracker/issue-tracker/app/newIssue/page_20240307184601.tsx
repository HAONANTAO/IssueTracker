import React from "react";

import dynamic from "next/dynamic";
import IssueFormSkeleton from "../components/IssueFormSkeleton";

const IssueForm = dynamic(() => import("../components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const NewIssue = () => {
  return <IssueForm></IssueForm>;
};

export default NewIssue;
