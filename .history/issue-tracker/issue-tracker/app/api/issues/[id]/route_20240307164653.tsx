import { NextRequest, NextResponse } from "next/server";
import { ValidationSchema } from "@/app/ValidationSchema";
import prisma from "@/prisma/client";

export async function DELETE({ params }: { params: { id: number } }) {
  
  return NextResponse.json({ msg: "successfully delete", deletedIssue });
}
