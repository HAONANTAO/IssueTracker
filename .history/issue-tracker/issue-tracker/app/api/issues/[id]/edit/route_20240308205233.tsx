import { PatchValidationSchema } from "@/app/ValidationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const body = await request.json();
  const id = parseInt(params.id);

  const validation = PatchValidationSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const { assignedToUserId, title, description } = body;
  const issue = await prisma?.issue.findUnique({
    where: {
      id: id,
    },
  });
  const ValidedUser = await prisma.user.findUnique({
    where: { id: assignedToUserId },
  });
  if(!vali)
  if (!issue)
    return NextResponse.json(
      { msg: "unexpected error : can not found!" },
      { status: 400 },
    );

  const UpdateIssue = await prisma?.issue.update({
    where: { id: issue.id },
    data: { title: title, description: description },
  });

  return NextResponse.json(UpdateIssue);
}
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
