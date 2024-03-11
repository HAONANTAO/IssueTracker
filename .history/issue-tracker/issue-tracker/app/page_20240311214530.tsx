import prisma from "@/prisma/client";
import { Flex, Grid } from "@radix-ui/themes";
import { Metadata } from "next";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";
import IssueChart from "./issues/IssueChart";
export default async function Home() {
  const getProps = async () => {
    return {
      open: await prisma.issue.count({
        where: { status: "OPEN" },
      }),
      inProgress: await prisma.issue.count({
        where: { status: "IN_PROGRESS" },
      }),
      closed: await prisma.issue.count({
        where: { status: "CLOSED" },
      }),
    };
  };
  const { open, inProgress, closed } = await getProps();
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Flex direction="column" gap="5">
        <IssueSummary
          open={open}
          inProgress={inProgress}
          closed={closed}></IssueSummary>
        <IssueChart
          open={open}
          inProgress={inProgress}
          closed={closed}></IssueChart>
      </Flex>
      <LatestIssues></LatestIssues>
    </Grid>
  );
}

export const metadata: Metadata = {
  title: "Issue Tracker-Dashboard",
  description: "View a summary of project issues",
};
