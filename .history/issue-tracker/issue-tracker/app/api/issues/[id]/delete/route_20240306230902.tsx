import prisma from "@/prisma/client";
export function DELETE(id: number) {
  const deletedIssue = prisma.issue.delete({
    where: { id: id },
  });
  if(!deletedIssue)
}
