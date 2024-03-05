import React from "react";
import IssueForm from "@/app/components/IssueForm";
import { Issue } from "@prisma/client";
const EditPage = ({ issue }: { issue: Issue }) => {

  return <IssueForm issue={issue}></IssueForm>;
};

export default EditPage;
