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
  const issue = await prisma.issue.findUnique({
    where: {
      id: id,
    },
  });

  if (assignedToUserId) {
    const ValidedUser = await prisma.user.findUnique({
      where: { id: assignedToUserId },
    });
    if (!ValidedUser)
      return NextResponse.json({ msg: "not a valid user" }, { status: 400 });
  }
  return NextResponse.json({ ValidedUser });
  if (!issue)
    return NextResponse.json(
      { msg: "unexpected error : can not found!" },
      { status: 400 },
    );

  const UpdateIssue = await prisma.issue.update({
    where: { id: issue.id },
    data: { title, description, assignedToUserId },
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
