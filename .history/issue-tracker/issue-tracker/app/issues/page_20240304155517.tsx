import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumnHeaderCell,
  TableHeader,
  TableRoot,
  TableRow,
} from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import prisma from "@/prisma/client";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <div className="px-2 mx-2">
      <div className="flex items-center justify-center">
        <span>All Issues</span>
      </div>
      <Button>
        <Link href="/newIssue">Create New Issue</Link>
      </Button>
      <TableRoot variant="surface">
        <TableHeader>
          <TableRow>
            <TableColumnHeaderCell>Issue</TableColumnHeaderCell>
            <TableColumnHeaderCell className="hidden md:table-cell">
              Status
            </TableColumnHeaderCell>
            <TableColumnHeaderCell className="hidden md:table-cell">
              CreateAt
            </TableColumnHeaderCell>
            <TableColumnHeaderCell className="hidden md:table-cell">
              Description
            </TableColumnHeaderCell>
          </TableRow>
        </TableHeader>
        {issues.map((i) => (
          <TableBody>
            <TableRow>
              <TableCell>
                {i.title}
                <div>{i.status}</div>
              </TableCell>
              <TableCell className="hidden md:table-cell">{i.status}</TableCell>
              <TableCell className="hidden md:table-cell">
                {i.createdAt.toDateString()}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {i.description}
              </TableCell>
            </TableRow>
          </TableBody>
        ))}
      </TableRoot>
    </div>
  );
};

export default IssuesPage;
