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

import NewIssueButton from "./NewIssueButton";
import { Status } from "@prisma/client";

const columns = [
  { label: "Issue", value: "Title" },
  { label: "Status", value: "Status" },
  { label: "Issue", value: "Title" },
];
const IssuesPage = async ({
  searchParams,
}: {
  searchParams: { status: Status };
}) => {
  const allowedStatus = ["IN_PROGRESS", "CLOSED", "OPEN"];
  const status = allowedStatus.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const issues = await prisma.issue.findMany({
    where: { status },
  });

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
            </TableRow>
          </TableBody>
        ))}
      </TableRoot>
    </div>
  );
};
// export const dynamic = "force-dynamic";
// export const revalidate = 0;
export default IssuesPage;
