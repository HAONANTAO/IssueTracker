import {
  TableBody,
  TableCell,
  TableColumnHeaderCell,
  TableHeader,
  TableRoot,
  TableRow,
} from "@radix-ui/themes";
import React from "react";
import StatusBadge from "../components/StatusBadge";
import {Skeleton} from "../components/"
const issues = [1, 2, 3, 4, 5];
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
            <TableRow key={i}>
              <TableCell>
                <Skeleton></Skeleton>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Skeleton></Skeleton>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Skeleton></Skeleton>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Skeleton />
              </TableCell>
            </TableRow>
          </TableBody>
        ))}
      </TableRoot>
    </>
  );
};

export default LoadingPage;
