import { NextRequest, NextResponse } from "next/server";
import { ValidationSchema } from "@/app/ValidationSchema";
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
export async function DELETE({ params }: { params: { id: number } }) {
  const issue = await prisma.issue.findUnique({
    where: { id: params.id },
  });

  if (!issue)
    return NextResponse.json({ error: "failed to delete" }, { status: 400 });
  await prisma.issue.delete({
    where: { id: issue.id },
  });
  return NextResponse.json({ msg: "successfully delete" });
}
