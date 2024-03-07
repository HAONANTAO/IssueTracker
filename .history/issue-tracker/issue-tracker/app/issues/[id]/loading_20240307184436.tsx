import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { Skeleton } from "../../components/Loading";

const IssueDetailsPageLoading = () => {
  return (
    <Box className="max-w-xl">
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
          <Skeleton />
        </Text>
      </Flex>
    </Box>
  );
};

export default IssueDetailsPageLoading;
