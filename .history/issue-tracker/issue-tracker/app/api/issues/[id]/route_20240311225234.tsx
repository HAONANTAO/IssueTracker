import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE({ params }: { params: { id: string } }) {
  return NextResponse.json({ msg: "successfully delete!" });
}
