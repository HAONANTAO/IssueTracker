import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { ValidationSchema } from "../../ValidationSchema";

const prisma = new PrismaClient();
export async function POST(request: NextRequest) {
  const body = await request.json();
  // zod for validation
  const validation = ValidationSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const createIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });
  return NextResponse.json({
    message: "Validation successfully!",
    createIssue,
  });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const issue = prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if(!issue) return NextRes
}
