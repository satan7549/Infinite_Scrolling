import React from "react";

import { Box, Skeleton, Flex, Spacer } from "@chakra-ui/react";

const Loading = () => {
  const skeletonCount = 10;

  const skeletonCards = Array.from(Array(skeletonCount)).map((_, index) => (
    <Box key={index} borderWidth="1px" borderRadius="lg" p={4} mb={4}>
      <Flex alignItems="center">
        <Skeleton height="30px" width="100px" mr={2} />
        <Spacer />
        <Skeleton height="40px" width="40px" />
      </Flex>
    </Box>
  ));

  return <>{skeletonCards}</>;
};

export default Loading;
