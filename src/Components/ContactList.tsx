import React from "react";
import { List, Box, Heading, UnorderedList } from "@chakra-ui/react";
import ContactCard from "./ContactCard";
import Loading from "./Loading";
import { Contact } from "../constains";

// ContactList component responsible for rendering a list of contacts
interface ContactListProps {
  contacts: Contact[]; // Array of contacts to be rendered
  loading: boolean; // Indicates whether the contacts are still loading
}

const ContactList: React.FC<ContactListProps> = ({ contacts, loading }) => {
  return (
    <Box
      mt={"80px"}
      p={4}
      width={{ base: "100%", sm: "320px", md: "500px", lg: "800px" }}
      mx="auto"
      boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
    >
      <Heading textAlign="center" mb={4}>
        Infinite Scroll Contacts
      </Heading>
      <UnorderedList listStyleType="none" p={0}>
        {contacts.map((contact, index) => (
          <List key={index} spacing={3}>
            <ContactCard contact={contact} />
          </List>
        ))}
      </UnorderedList>
      {/* Render the Loading component if contacts are still loading*/}
      {loading && <Loading />}
    </Box>
  );
};

export default ContactList;
