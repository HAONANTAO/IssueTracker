import { Issue } from "@prisma/client";
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";
import StatusBadge from "./StatusBadge";

interface Props {
  ;
}
const IssueDetails = ({ issueDetails }: Props) => {
  return (
    <Box>
      <Heading>{issueDetails.title}</Heading>{" "}
      <StatusBadge status={issueDetails.status}></StatusBadge>{" "}
      <Text>{issueDetails.updatedAt.toDateString()}</Text>
      <Flex className="gap-2 mx-2 my-2 flex-col">
        <Card className="prose mt-2 max-w-full">
          <ReactMarkdown>{issueDetails.description}</ReactMarkdown>
        </Card>
      </Flex>
    </Box>
  );
};

export default IssueDetails;
