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
  Link,
} from "@radix-ui/themes";
import SelfLink from "../components/SelfLink";
import React from "react";
import prisma from "@/prisma/client";
import StatusBadge from "../components/StatusBadge";
import delay from "delay";

// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import NewIssueButton from "./NewIssueButton";
const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  await delay(1000);
  return (
    <div className="px-2 mx-2">
      <NewIssueButton></NewIssueButton>
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
            {/* <TableColumnHeaderCell className="hidden md:table-cell">
              Description
            </TableColumnHeaderCell> */}
          </TableRow>
        </TableHeader>
        {issues.map((i) => (
          <TableBody>
            <TableRow>
              <TableCell className="hidden md:table-cell">
                <Link href={`/issues/${i.id}`}> {i.title}</Link>
              </TableCell>

              <TableCell className="hidden md:table-cell">
                <StatusBadge status={i.status}></StatusBadge>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {i.createdAt.toDateString()}
              </TableCell>
              {/* <TableCell className="hidden md:table-cell">
                {i.description}
              </TableCell> */}
            </TableRow>
          </TableBody>
        ))}
      </TableRoot>
    </div>
  );
};

export default IssuesPage;
