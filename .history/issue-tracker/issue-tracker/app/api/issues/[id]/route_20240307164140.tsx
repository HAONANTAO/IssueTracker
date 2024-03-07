import { NextRequest, NextResponse } from "next/server";
import { ValidationSchema } from "@/app/ValidationSchema";
import prisma from "@/prisma/client";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  const issue = await prisma.issue.findUnique({
    where: { id: params.id },
  });

  if (!issue)
    return NextResponse.json({ error: "failed to delete" }, { status: 400 });
  const deletedIssue = await prisma.issue.delete({
    where: { id: issue.id },
  });
  return NextResponse.json({ msg: "successfully delete", deletedIssue });
}
