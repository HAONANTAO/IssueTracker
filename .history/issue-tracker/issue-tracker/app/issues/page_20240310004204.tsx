import prisma from "@/prisma/client";

import delay from "delay";

import { Status } from "@prisma/client";
import Pagination from "../components/Pagination";
import NewIssueButton from "./NewIssueButton";
import IssueTable from "./list/IssueTable";
import { IssueQuery } from "@/app/issues/list/IssueTable";
import {status}
interface Props {
  searchParams: IssueQuery;
}

const IssuesPage = async ({ searchParams }: Props) => {
  //self-given
  const pageSize = 10;

  const page = parseInt(searchParams.page);

  const issueCount = await prisma.issue.count({ where: { status } });
  await delay(1000);
  return (
    <div className="px-2 mx-2">
      <NewIssueButton></NewIssueButton>
      <IssueTable searchParams={searchParams}></IssueTable>
      <Pagination
        pageSize={pageSize}
        currentPage={page}
        itemCount={issueCount}
      />
    </div>
  );
};
// export const dynamic = "force-dynamic";
// export const revalidate = 0;
export default IssuesPage;
