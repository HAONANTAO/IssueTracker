import {
  Button,
  Table,
  TableBody,
  TableCell,
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

      <TableRoot>
        <TableHeader>
          <TableRow>
            <TableCell>Issue</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>CreateAt</TableCell> <TableCell>Description</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody></TableBody>
      </TableRoot>
      <Button>
        <Link href="/newIssue">Create New Issue</Link>
      </Button>
    </div>
  );
};

export default IssuesPage;
