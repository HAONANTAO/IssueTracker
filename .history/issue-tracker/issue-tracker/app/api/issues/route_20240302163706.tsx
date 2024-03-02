import { NextRequest } from "next/server";
import { z } from "zod";


z.object{
  title: z.string()
}
export function POST(request: NextRequest) {}
