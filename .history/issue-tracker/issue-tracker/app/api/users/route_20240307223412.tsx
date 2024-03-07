import { NextRequest } from "next/server";
import prisma from "@/prisma/client";
export async function GET(request: NextRequest) {
  // find all user and return
  const Users = await prisma.user.findMany({ orderBy: { name: "asc" } });
  return NextResp
}
