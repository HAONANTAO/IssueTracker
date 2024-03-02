import { NextRequest } from "next/server";
import { z } from "zod";


z.object{
  title:z.str
}
export function POST(request: NextRequest) {}
