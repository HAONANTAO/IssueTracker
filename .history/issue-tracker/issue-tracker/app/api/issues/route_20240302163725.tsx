import { NextRequest } from "next/server";
import { z } from "zod";


z.object{
  title: z.string().min(1).max(255),
  description: z.string().min
}
export function POST(request: NextRequest) {}
