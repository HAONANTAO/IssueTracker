import prisma from "@/prisma/client";
import {
  TableBody,
  TableCell,
  TableColumnHeaderCell,
  TableHeader,
  TableRoot,
  TableRow,
} from "@radix-ui/themes";
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
  const page =parseInt(searchParams.page)
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
      <TableRoot variant="surface">
        <TableHeader>
          <TableRow>
            {columns.map((i) => (
              <TableColumnHeaderCell className={i.className} key={i.value}>
                <Link href={{ query: { ...searchParams, orderBy: i.value } }}>
                  {i.label}
                  {i.value === searchParams.orderBy && (
                    <ArrowUpIcon className="inline"></ArrowUpIcon>
                  )}
                </Link>
              </TableColumnHeaderCell>
            ))}
          </TableRow>
        </TableHeader>
        {issues.map((i) => (
          <TableBody>
            <TableRow key={i.id}>
              <TableCell className="hidden md:table-cell">
                <SelfLink href={`/issues/${i.id}`}> {i.title}</SelfLink>
              </TableCell>

              <TableCell className="hidden md:table-cell">
                <StatusBadge status={i.status}></StatusBadge>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {i.createdAt.toDateString()}
              </TableCell>
            </TableRow>
          </TableBody>
        ))}
      </TableRoot>
      <Pagination
        pageSize={pageSize}
        currentPage={parseInt(searchParams.page)}
        itemCount={issueCount}
      />
    </div>
  );
};
// export const dynamic = "force-dynamic";
// export const revalidate = 0;
export default IssuesPage;
