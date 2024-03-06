import { Box, Heading, Flex, Card } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import StatusBadge from "./StatusBadge";
import { Text } from "@radix-ui/themes";
import { Issue } from "@prisma/client";

interface Props {
  issueDetails: Issue;
}
const IssueDetails = ({ issueDetails }: Props) => {
  return (
    <Box>
      <Heading>{issueDetails.title}</Heading>{" "}
      <StatusBadge status={issueDetails.status}></StatusBadge>{" "}
      <Text>{issueDetails.updatedAt.toDateString()}</Text>
      <Flex className="gap-2 mx-2 my-2 flex-col">
        <Card className="prose mt-2 mx-x-">
          <ReactMarkdown>{issueDetails.description}</ReactMarkdown>
        </Card>
      </Flex>
    </Box>
  );
};

export default IssueDetails;
