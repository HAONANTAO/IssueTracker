import prisma from "@/prisma/client";
import { NextRequest } from "next/server";
export function DELETE(request: NextRequest,
  { params }:  { id: string }) {
  const deletedIssue = prisma.issue.delete({
    where: { id: paramid },
  });
  if(!deletedIssue){
    return
  }
}
