import Image from "next/image";
import Pagination from "./components/Pagination";

export default function Home() {
  return (
    <Pagination itemCount={100} pageSize={50} currentPage={2}></Pagination>
  );
}
