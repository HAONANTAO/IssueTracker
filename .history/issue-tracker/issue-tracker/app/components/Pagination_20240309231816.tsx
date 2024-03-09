import { DoubleArrowDownIcon, DoubleArrowLeftIcon } from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";
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
      <Button color="gray" variant="soft">
      <DoubleArrowLeftIcon
      </Button>
    </Flex>
  );
};

export default Pagination;
