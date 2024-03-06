import prisma from "@/prisma/client";
import { NextRequest } from "next/server";
export function DELETE(request: NextRequest,
  { params }:  { {params:}id: string }) {
  const deletedIssue = prisma.issue.delete({
    where: { id: params.id },
  });
  if(!deletedIssue){
    return
  }
}
