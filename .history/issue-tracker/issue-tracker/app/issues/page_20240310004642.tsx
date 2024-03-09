import prisma from "@/prisma/client";

import delay from "delay";

import { IssueQuery } from "@/app/issues/list/IssueTable";
import Pagination from "../components/Pagination";
import NewIssueButton from "./NewIssueButton";
import IssueTable from "./list/IssueTable";
import { Flex } from "@radix-ui/themes";
interface Props {
  searchParams: IssueQuery;
}

const IssuesPage = async ({ searchParams }: Props) => {
  const allowedStatus = ["IN_PROGRESS", "CLOSED", "OPEN"];
  const status = allowedStatus.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  //self-given
  const pageSize = 10;

  const page = parseInt(searchParams.page);

  const issueCount = await prisma.issue.count({ where: { status } });
  await delay(1000);
  return (
    <Flex direction={co}>
      <NewIssueButton></NewIssueButton>
      <IssueTable searchParams={searchParams}></IssueTable>
      <Pagination
        pageSize={pageSize}
        currentPage={page}
        itemCount={issueCount}
      />
    </Flex>
  );
};
// export const dynamic = "force-dynamic";
// export const revalidate = 0;
export default IssuesPage;
