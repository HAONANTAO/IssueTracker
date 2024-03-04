"use client";
import {
  Badge,
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
import React, { useEffect, useState } from "react";
import prisma from "@/prisma/client";
import StatusBadge from "../components/StatusBadge";

const IssuesPage = async () => {
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    const fetchIssues = async () => {
      const fetchedIssues = await prisma.issue.findMany();
      setIssues(fetchedIssues);
    };

    fetchIssues();
  }, []); // 添加空依赖项，以确保只在组件挂载时触发

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
                <div className="block md:hidden">{i.status}</div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <StatusBadge status={i.status}></StatusBadge>
              </TableCell>
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
