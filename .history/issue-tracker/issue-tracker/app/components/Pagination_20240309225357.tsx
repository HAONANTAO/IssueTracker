import { Flex, Text } from "@radix-ui/themes";
import React from "react";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}
const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  return (
    <Flex>
      <Text>Page {currentPage}</Text>
    </Flex>
  );
};

export default Pagination;
