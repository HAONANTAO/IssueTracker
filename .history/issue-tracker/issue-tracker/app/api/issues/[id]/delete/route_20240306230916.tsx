import prisma from "@/prisma/client";
export function DELETE(request: NextRequest,
  { params }: { params: { id: string }) {
  const deletedIssue = prisma.issue.delete({
    where: { id: id },
  });
  if(!deletedIssue){
    return
  }
}
