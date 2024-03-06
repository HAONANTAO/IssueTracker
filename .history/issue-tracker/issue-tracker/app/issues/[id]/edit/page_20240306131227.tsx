import React from "react";
import IssueForm from "@/app/components/IssueForm";
import { Issue } from "@prisma/client";
import { notFound } from "next/navigation";
import UpdateForm from "@/app/api/issues/[id]/_components/UpdateForm";

interface Props {
  params: { id: string };
}
const EditPage = async ({ params }: Props) => {
  const issue = await prisma?.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) return notFound();
  return <UpdateForm issue={issue}></UpdateForm>;
};

export default EditPage;
