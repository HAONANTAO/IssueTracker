import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB
const schema = z.object({
  title: z.string().min(1, "title is required").max(255),
  description: z.string().min(2, "description is required"),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  // zod for validation
  const validation = schema.safeParse(body);
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
