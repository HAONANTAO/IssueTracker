import { NextRequest } from "next/server";
import { ValidationSchema } from "@/app/ValidationSchema";}
export function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
    const body = request.json();
    const id = params.id;



}
