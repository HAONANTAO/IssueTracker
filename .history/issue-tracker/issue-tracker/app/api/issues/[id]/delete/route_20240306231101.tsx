import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
export function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const deletedIssue = prisma.issue.delete({
    where: { id: parseInt(params.id) },
  });
  if (!deletedIssue) {
    return NextResponse.json({ms});
  }
  return NextResponse.json({ msg: "successfully delete" });
}
