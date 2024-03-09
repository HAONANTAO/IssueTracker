import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}
const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;
  const router = useRouter();
  const searchParams = useSearchParams();

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page',page.)
  };

  return (
    <Flex align="center" gap="2">
      <Text size="2">
        Page {currentPage} of {pageCount}
      </Text>
      <Button color="gray" variant="soft" disabled={pageCount === pageCount}>
        <DoubleArrowLeftIcon />
      </Button>
      <Button color="gray" variant="soft" disabled={pageCount === pageCount}>
        <ChevronLeftIcon />
      </Button>
      <Button color="gray" variant="soft" disabled={pageCount === 1}>
        <ChevronRightIcon />
      </Button>{" "}
      <Button color="gray" variant="soft" disabled={pageCount === 1}>
        <DoubleArrowRightIcon />
      </Button>
    </Flex>
  );
};

export default Pagination;
