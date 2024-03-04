import {
  Skeleton,
  TableBody,
  TableCell,
  TableColumnHeaderCell,
  TableHeader,
  TableRoot,
  TableRow,
} from "@radix-ui/themes";
import React from "react";
import StatusBadge from "../components/StatusBadge";

const issues =5
const LoadingPage = () => {
  return (
    <>
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
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </TableRow>
          </TableBody>
        ))}
      </TableRoot>
    </>
  );
};

export default LoadingPage;
