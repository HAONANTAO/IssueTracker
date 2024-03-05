import StatusBadge from "@/app/components/StatusBadge";
import { Flex, Heading, Card, Text } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const IssueDetailsPageLoading = () => {
  return (
    <div className="max-x-l">
      <Heading>
        <Skeleton />
      </Heading>
      {/* <StatusBadge status="CLOSED"> */}
      <Skeleton width="5rem" />
      <Skeleton width="8rem" />
      {/* </StatusBadge> */}
      <Flex className="gap-2 mx-2 my-2 flex-col">
        <Card className="prose mt-2">
          <Skeleton count={5} />
        </Card>
        <Text>
          {" "}
          <Skeleton />
        </Text>
      </Flex>
    </div>
  );
};

export default IssueDetailsPageLoading;
