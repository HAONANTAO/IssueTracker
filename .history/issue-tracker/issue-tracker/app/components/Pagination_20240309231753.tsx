import { DoubleArrowDownIcon } from "@radix-ui/react-icons";
import { Flex, Text } from "@radix-ui/themes";
import React from "react";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}
const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;
  return (
    <Flex>
      <Text>
        Page {currentPage} of {pageCount}
      </Text>
      <Button color="red">
        <DoubleArrowDownIcon></DoubleArrowDownIcon>
      </Button>
    </Flex>
  );
};

export default Pagination;
