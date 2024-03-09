import React from "react";

const IssueTable = () => {
  return (
    <TableRoot variant="surface">
      <TableHeader>
        <TableRow>
          {columns.map((i) => (
            <TableColumnHeaderCell className={i.className} key={i.value}>
              <Link href={{ query: { ...searchParams, orderBy: i.value } }}>
                {i.label}
                {i.value === searchParams.orderBy && (
                  <ArrowUpIcon className="inline"></ArrowUpIcon>
                )}
              </Link>
            </TableColumnHeaderCell>
          ))}
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
  );
};

export default IssueTable;
