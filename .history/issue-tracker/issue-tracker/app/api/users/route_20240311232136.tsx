import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
export async function GET(request: NextRequest) {
  // find all user and return
  const session = await getServerSession(AuthOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
  const Users = await prisma.user.findMany({ orderBy: { name: "asc" } });
  return NextResponse.json(Users);
}
