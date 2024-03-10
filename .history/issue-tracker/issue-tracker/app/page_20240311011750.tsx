import Image from "next/image";
import Pagination from "./components/Pagination";
import { useSearchParams } from "next/navigation";
import LatestIssues from "./LatestIssues";
import IssueSummary from "./IssueSummary";

export default function Home() {
  return <IssueSummary></IssueSummary>>;
}
