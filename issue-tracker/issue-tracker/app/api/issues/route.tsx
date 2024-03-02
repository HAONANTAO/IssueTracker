import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});
export async function POST(request: NextRequest) {
  const body = await request.json();
  // zod for validation
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors);
  }

  return NextResponse.json(<span>validation successfully!</span>);
}
