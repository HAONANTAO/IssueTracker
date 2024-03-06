export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } },
) {
  try {
    const issue = await prisma.issue.findUnique({
      where: { id: params.id },
    });
    if (!issue) {
      return NextResponse.json({ error: "failed to delete" }, { status: 400 });
    }

    await prisma.issue.delete({
      where: { id: issue.id },
    });

    return NextResponse.json({ msg: "successfully delete" });
  } catch (error) {
    console.error("Error during DELETE request:", error);
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 },
    );
  }
}
