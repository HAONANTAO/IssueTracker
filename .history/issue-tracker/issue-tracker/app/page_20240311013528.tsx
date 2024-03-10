import Image from "next/image";
import Pagination from "./components/Pagination";
import { useSearchParams } from "next/navigation";
import LatestIssues from "./LatestIssues";
import IssueSummary from "./IssueSummary";
import prisma from "@/prisma/client";
export default async function Home() {
  const open = await prisma.issue.count({
    where: { status: "OPEN" },
  });
  return <IssueSummary open={10} inProgress={5} closed={3}></IssueSummary>;
}
