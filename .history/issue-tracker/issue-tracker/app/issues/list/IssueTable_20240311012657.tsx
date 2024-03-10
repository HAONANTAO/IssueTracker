import SelfLink from "@/app/components/SelfLink";
import StatusBadge from "@/app/components/StatusBadge";
import prisma from "@/prisma/client";
import { Issue, Status } from "@prisma/client";
import { ArrowUpIcon } from "@radix-ui/react-icons";

import {
  TableBody,
  TableCell,
  TableColumnHeaderCell,
  TableHeader,
  TableRoot,
  TableRow,
} from "@radix-ui/themes";
import Link from "next/link";

export interface IssueQuery {
  status: Status;
  orderBy: string;
  page: string;
}
interface Props {
  searchParams: IssueQuery;
  issues: Issue[]
}

const IssueTable = async ({ searchParams }: Props) => {
  const columns: { label: string; value: keyof Issue; className?: string }[] = [
    { label: "Issue", value: "title" },
    { label: "Status", value: "status", className: "hidden md:table cell" },
    {
      label: "CreatedAt",
      value: "createdAt",
      className: "hidden md:table cell",
    },
  ];
 
  const allowedStatus = ["IN_PROGRESS", "CLOSED", "OPEN"];
  const status = allowedStatus.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  
  return (
    <TableRoot variant="surface">
      <TableHeader>
        <TableRow>
          {columns.map((i) => (
            <TableColumnHeaderCell key={i.value}>
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
  );
};

export default IssueTable;
