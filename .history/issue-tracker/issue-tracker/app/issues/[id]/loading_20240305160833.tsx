import StatusBadge from "@/app/components/StatusBadge";
import { Flex, Heading, Card, Text } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";

const IssueDetailsPageLoading = () => {
  return (
    <div>
      {" "}
      <Heading>{issueDetails.title}</Heading>{" "}
      <StatusBadge status={issueDetails.status}></StatusBadge>
      <Flex className="gap-2 mx-2 my-2 flex-col">
        <Card className="prose mt-2">
          <ReactMarkdown>{issueDetails.description}</ReactMarkdown>
        </Card>
        <Text>{issueDetails.updatedAt.toDateString()}</Text>
      </Flex>
    </div>
  );
};

export default IssueDetailsPageLoading;
