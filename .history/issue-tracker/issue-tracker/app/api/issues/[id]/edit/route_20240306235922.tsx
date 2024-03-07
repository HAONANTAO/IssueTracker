import { NextRequest, NextResponse } from "next/server";
import { ValidationSchema } from "@/app/ValidationSchema";
import prisma from "@/prisma/client";
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const body = await request.json();
  const id = parseInt(params.id);

  const validation = ValidationSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const issue = await prisma?.issue.findUnique({
    where: {
      id: id,
    },
  });

  if (!issue)
    return NextResponse.json(
      { msg: "unexpected error : can not found!" },
      { status: 400 },
    );

  const UpdateIssue = await prisma?.issue.update({
    where: { id: issue.id },
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(UpdateIssue);
}
