import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Container
      width={{
        base: "full",
        sm: "full",
        md: "container.xl",
        lg: "container.lg",
      }}
      centerContent={true}
    >
      <VStack
        width="full"
        borderRadius="lg"
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        p={4}
        my={{ base: 24, sm: 24, md: 28, lg: 40 }}
      >
        <Heading
          fontWeight="bolder"
          textAlign={"center"}
          fontSize="20px"
          mb="20px"
          color="red"
        >
          404 - Page Not Found
        </Heading>
        <Text>The requested page: {`${pathname}`} does not exist.</Text>
      </VStack>
    </Container>
  );
};

export default ErrorPage;
