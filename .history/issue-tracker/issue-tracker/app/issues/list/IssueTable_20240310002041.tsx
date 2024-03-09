import SelfLink from "@/app/components/SelfLink";
import StatusBadge from "@/app/components/StatusBadge";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import {
  TableRoot,
  TableHeader,
  TableRow,
  TableColumnHeaderCell,
  TableBody,
  TableCell,
} from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import {
  TableBody,
  TableCell,
  TableColumnHeaderCell,
  TableHeader,
  TableRoot,
  TableRow,
} from "@radix-ui/themes";
const IssueTable = () => {
  return (
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
  );
};

export default IssueTable;
