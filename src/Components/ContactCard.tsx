import React from "react";
import { GridItem, Box, Flex, Spacer, Text, Avatar } from "@chakra-ui/react";
import { Contact } from "../constains";


// ContactCard component responsible for rendering an individual contact card
interface ContactCardProps {
  contact: Contact; // Contact object containing contact information
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const { name, picture } = contact; // Extracting name and picture from the contact object

  return (
    <GridItem>
      <Box
        borderRadius="lg"
        p={4}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        _hover={{ transform: "scale(1.02)" }}
      >
        <Flex flexDirection="row" alignItems="center">
          {/* Displaying the full name of the contact */}
          <Text fontSize="2xl">{`${name.first} ${name.last}`}</Text>
          <Spacer />
          {/* Displaying the contact's profile picture */}
          <Avatar
            size="lg"
            name={`${name.first} ${name.last}`}
            src={picture.large}
            mr={4}
          />
        </Flex>
      </Box>
      {/* Render the Loading component if contacts are still loading*/}
      
    </GridItem>
  );
};

export default ContactCard;
