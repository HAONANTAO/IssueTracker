import AuthOptions from "@/app/auth/AuthOptions";
import DeletePageButton from "@/app/components/DeletePageButton";
import EditPageButton from "@/app/components/EditPageButton";
import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import delay from "delay";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { cache } from "react";
import IssueDetails from "../../components/IssueDetails";
import AssigneeSelect from "./AssigneeSelect";
interface Props {
  params: { id: string };
}

const fetchUser = cache(async (issueId: number) => {
  return await prisma.issue.findUnique({
    where: { id: issueId },
  });
});
const IssueDetailsPage = async ({ params }: Props) => {
  const session = await getServerSession(AuthOptions);
  await delay(2000);
  // if (typeof parseInt(params.id) !== "number") return notFound();
  const issueDetails = await fetchUser(parseInt(params.id));
  if (!issueDetails) return notFound();

  return (
    <div>
      <Grid columns={{ initial: "1", md: "5" }} gap="5">
        <Box className="lg:col-span-4">
          <IssueDetails issueDetails={issueDetails}></IssueDetails>
        </Box>
        <Box className=" space-x-4 px-4 ">
          <Flex direction="column" gap="4">
            <AssigneeSelect issue={issueDetails}></AssigneeSelect>
            <EditPageButton issueDetails={issueDetails}></EditPageButton>
            {session && (
              <DeletePageButton issueDetails={issueDetails}></DeletePageButton>
            )}
          </Flex>
        </Box>
      </Grid>
    </div>
  );
};

export default IssueDetailsPage;
export async function generateMetadata({ params }: Props) {
  const issue = await fetchUser(parseInt(params.id));
  return {
    title: issue?.title,
    description: "Details of issue" + issue?.id,
  };
}
