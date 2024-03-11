import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { ValidationSchema } from "../../ValidationSchema";
import { getServerSession } from "next-auth";

const prisma = new PrismaClient();
export async function POST(request: NextRequest) {
  const session = await getServerSession(AuthOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
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
