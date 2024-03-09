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

const columns: { label: string; value: keyof Issue; className?: string }[] = [
  { label: "Issue", value: "title" },
  { label: "Status", value: "status", className: "hidden md:table cell" },
  { label: "CreatedAt", value: "createdAt", className: "" },
];
const IssuesPage = async ({ searchParams }: Props) => {
  const allowedStatus = ["IN_PROGRESS", "CLOSED", "OPEN"];
  const status = allowedStatus.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  //self-given
  const pageSize = 10;
  const orderBy = searchParams.orderBy
    ? { [searchParams.orderBy]: "asc" }
    : undefined;
  const page = parseInt(searchParams.page);
  const issues = await prisma.issue.findMany({
    where: { status },
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
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
