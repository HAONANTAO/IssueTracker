import React from "react";
import IssueForm from "@/app/components/IssueForm";
import { Issue } from "@prisma/client";
const EditPage = ({issue}:{issue: Issue}) => {
  return <IssueForm></IssueForm>;
};

export default EditPage;
