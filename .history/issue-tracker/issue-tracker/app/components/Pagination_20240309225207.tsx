import { Flex } from "@radix-ui/themes";
import React from "react";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}
const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  return (
    <Flex>
      <Text></Text>
    </Flex>
  );
};

export default Pagination;
