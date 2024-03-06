import prisma from "@/prisma/client";
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

// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
import NewIssueButton from "./NewIssueButton";
import { useEffect } from "react";
const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  await delay(1000);

  useEffect(async() => {}, []);
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
            <TableRow key={i.id}>
              <TableCell className="hidden md:table-cell">
                <SelfLink href={`/issues/${i.id}`}> {i.title}</SelfLink>
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
