import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE({ params }: { params: { id: string } }) {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  return NextResponse.json(parseInt(params.id));
}
