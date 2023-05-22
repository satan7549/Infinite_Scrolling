import React from "react";
import { Grid, Box, Heading } from "@chakra-ui/react";
import ContactCard from "./ContactCard";
import { Contact } from "../constains";
import Loading from "./Loading";

// ContactList component responsible for rendering a list of contacts
interface ContactListProps {
  contacts: Contact[]; // Array of contacts to be rendered
  loading: boolean; // Indicates whether the contacts are still loading
}

const ContactList: React.FC<ContactListProps> = ({ contacts, loading }) => {
  return (
    <Box minHeight={"100vh"} mt={"80px"} p={4} overflowY={"auto"}>
      <Heading textAlign="center" mb={4}>
        Infinite Scroll Contacts
      </Heading>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        {contacts.map((contact, index) => (
          <ContactCard key={index} contact={contact} />
        ))}
      </Grid>
      {loading && <Loading />}
    </Box>
  );
};

export default ContactList;
