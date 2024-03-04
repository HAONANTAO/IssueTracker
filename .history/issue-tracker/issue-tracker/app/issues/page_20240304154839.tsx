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
        <TableHeader className="md:hidden">
          <TableRow>
            <TableColumnHeaderCell>Issue</TableCo>
            <TableCell>Status</TableCell>
            <TableCell>CreateAt</TableCell> <TableCell>Description</TableCell>
          </TableRow>
        </TableHeader>
        {issues.map((i) => (
          <TableBody>
            <TableRow>
              <TableCell>{i.id}</TableCell>
              <TableCell>{i.status}</TableCell>
              <TableCell>{i.createdAt.toDateString()}</TableCell>
              <TableCell>{i.description}</TableCell>
            </TableRow>
          </TableBody>
        ))}
      </TableRoot>
    </div>
  );
};

export default IssuesPage;