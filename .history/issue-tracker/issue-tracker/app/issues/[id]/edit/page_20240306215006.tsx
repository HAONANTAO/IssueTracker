import React from "react";

import { Issue } from "@prisma/client";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";
interface Props {
  params: { id: string };
}

const IssueForm = dynamic(() => import("@/app/components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton></IssueFormSkeleton>,
});

const EditPage = async ({ params }: Props) => {
  const issue = await prisma?.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) return notFound();
  return <IssueForm issue={issue}></IssueForm>;
};

export default EditPage;
