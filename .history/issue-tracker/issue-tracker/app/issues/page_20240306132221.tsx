import prisma from "@/prisma/client";
import React, { useEffect, useState } from "react";
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

const IssuesPage = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedIssues = await prisma.issue.findMany();
      await delay(3000);
      setIssues(fetchedIssues);
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="px-2 mx-2">
      <NewIssueButton />
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
          </TableRow>
        </TableHeader>
        <TableBody>
          {issues.map((i) => (
            <TableRow key={i.id}>
              <TableCell className="hidden md:table-cell">
                <SelfLink href={`/issues/${i.id}`}>{i.title}</SelfLink>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <StatusBadge status={i.status} />
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {i.createdAt.toDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableRoot>
    </div>
  );
};

export default IssuesPage;
