import Image from "next/image";
import Pagination from "./components/Pagination";
import { useSearchParams } from "next/navigation";
import LatestIssues from "./LatestIssues";
import IssueSummary from "./IssueSummary";

export default function Home() {
  return <IssueSummary open={10} inProgress={5} closed={3}></IssueSummary>;
}
