import prisma from "@/prisma/client";

import delay from "delay";
import SelfLink from "../components/SelfLink";
import StatusBadge from "../components/StatusBadge";

import NewIssueButton from "./NewIssueButton";
import { Issue, Status } from "@prisma/client";
import Link from "next/link";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import Pagination from "../components/Pagination";

interface Props {
  searchParams: { status: Status; orderBy: string; page: string };
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
    <div className="px-2 mx-2">
      <NewIssueButton></NewIssueButton>

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
