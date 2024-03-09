import Image from "next/image";
import Pagination from "./components/Pagination";

export default function Home() {
  return (
    <Flex>
      <Pagination itemCount={100} pageSize={500} currentPage={1}></Pagination>
    </Flex>
  );
}
