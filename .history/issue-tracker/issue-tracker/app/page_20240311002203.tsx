import Image from "next/image";
import Pagination from "./components/Pagination";
import { useSearchParams } from "next/navigation";

export default function Home() {
  return (
    <Pagination
      itemCount={100}
      pageSize={5}
      currentPage={parseInt(searchParams.page)}></Pagination>
  );
}
