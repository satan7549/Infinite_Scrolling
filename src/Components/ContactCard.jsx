import React from "react";
import { ListItem, Box, Flex, Spacer, Text, Avatar } from "@chakra-ui/react";

const ContactCard = ({ contact }) => {
  const { name, picture } = contact;

  return (
    <ListItem
      size={{
        lg: "lg",
        md: "md",
        sm: "sm",
        base: "sm",
      }}
    >
      <Box
        borderWidth="1px"
        borderRadius="lg"
        p={4}
        mb={2}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      >
        <Flex flexDirection="row" alignItems="center">
          <Text>{`${name.first} ${name.last}`}</Text>
          <Spacer />
          <Avatar
            size="lg"
            name={`${name.first} ${name.last}`}
            src={picture.large}
            mr={4}
          />
        </Flex>
      </Box>
    </ListItem>
  );
};

export default ContactCard;
