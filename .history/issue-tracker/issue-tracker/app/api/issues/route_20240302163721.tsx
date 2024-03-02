import { NextRequest } from "next/server";
import { z } from "zod";


z.object{
  title: z.string().min(1).max(255),
  description: z.
}
export function POST(request: NextRequest) {}
