import Image from "next/image";
import Pagination from "./components/Pagination";
import { Flex } from "@radix-ui/themes";

export default function Home() {
  return (
    <Flex>
      <Pagination itemCount={100} pageSize={500} currentPage={1}></Pagination>
    </Flex>
  );
}
