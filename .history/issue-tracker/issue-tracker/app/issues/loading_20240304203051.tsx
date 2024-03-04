import { TableBody, TableColumnHeaderCell, TableHeader, TableRoot, TableRow } from "@radix-ui/themes";
import React from "react";

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
    </>
  );
};

export default LoadingPage;
