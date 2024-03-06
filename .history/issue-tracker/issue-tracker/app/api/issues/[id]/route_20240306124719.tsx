import { NextRequest, NextResponse } from "next/server";
import { ValidationSchema } from "@/app/ValidationSchema";}
export function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
    const body = request.json();
    const id = parseInt(params.id);

    const validation = ValidationSchema.safeParse(body);
    if(!validation.success) return NextResponse.json(validation.error.errors,{status:400})

    const issue = prisma?.issue.findUnique({
      where:{
        id:id
      }
    })

    if(!issue) return NextResponse.json({msg:"unexpected error : can not found!"},{status:400})


    const UpdateIssue = prisma?.issue.update({
     
      where:{ data:{id:id},

      }
    })
}
