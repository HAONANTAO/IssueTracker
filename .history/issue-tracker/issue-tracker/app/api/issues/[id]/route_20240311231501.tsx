import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE({ params }: { params: { id: string } }) {
  return NextResponse.json({ parseInt(params.id) )
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
 
  if (!issue) {
    return NextResponse.json({ error: "failed to delete" }, { status: 400 });
  }
  await prisma.issue.delete({
    where: { id: issue.id },
  });
  return NextResponse.json({ msg: "successfully delete!" });
}
