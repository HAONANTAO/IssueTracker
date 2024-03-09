import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowDownIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
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
    <Flex align="center" gap="2">
      <Text>
        Page {currentPage} of {pageCount}
      </Text>{" "}
      <Button color="gray" variant="soft" disabled={pageCount === pageCount}>
        <Double />
      </Button>
      <Button color="gray" variant="soft" disabled={pageCount === pageCount}>
        <ChevronLeftIcon />
      </Button>
      <Button color="gray" variant="soft" disabled={pageCount === 1}>
        <ChevronRightIcon />
      </Button>
    </Flex>
  );
};

export default Pagination;
