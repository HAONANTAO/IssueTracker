import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import prisma from "@/prisma/client";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <div className="px-2 mx-2">
      <span className="flex mx-2 my-2">All Issues</span>
      {issues.map((i) => {
        return (
          <ul>
            <li>i.title</li>
            <li></li>
          </ul>
        );
      })}
      <Button>
        <Link href="/newIssue">Create New Issue</Link>
      </Button>
    </div>
  );
};

export default IssuesPage;
