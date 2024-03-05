import React from "react";
import IssueForm from "@/app/components/IssueForm";
import { Issue } from "@prisma/client";

interface Props {
  params: { id: string };
}
const EditPage = async ({ params }: Props) => {
  const issue = await prisma?.issue.findUnique({
    where: { id :parseInt()},
  });
  return <IssueForm issue={issue}></IssueForm>;
};

export default EditPage;
