import { NextRequest } from "next/server";
import { z } from "zod";


const schema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1)
})
export function POST(request: NextRequest) {
    const body = await request.json();
    // zod for validation
    const validation = schema.safeParse(body)
}
