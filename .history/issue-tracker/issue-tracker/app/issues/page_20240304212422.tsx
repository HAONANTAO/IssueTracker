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
import React, { useEffect } from "react";
import prisma from "@/prisma/client";
import StatusBadge from "../components/StatusBadge";
import delay from "delay";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import NewIssueButton from "./NewIssueButton";
const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  await delay(3000);
  return (
    <div className="px-2 mx-2">
      <NewIssueButton></NewIssueButton>
      <TableRoot variant="surface">
        <TableHeader>
          <TableRow>
            <TableColumnHeaderCell>Issue</TableColumnHeaderCell>
            <TableColumnHeaderCell className="hidden md:table-cell">
              ID
            </TableColumnHeaderCell>
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

                
              </TableCell>
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
