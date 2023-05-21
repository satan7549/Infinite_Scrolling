import React, { useEffect, useState } from "react";
import ContactList from "../Components/ContactList";
import { useToast } from "@chakra-ui/react";

// Define the HomeTest component
const Home = () => {
  // State variables using useState hook
  const [contacts, setContacts] = useState([]); // Stores the loaded contacts
  const [page, setPage] = useState(1); // Tracks the current page number
  const [loading, setLoading] = useState(false); // Indicates if contacts are being loaded
  const [hasMore, setHasMore] = useState(true); // Indicates if there are more contacts to load
  const toast = useToast();

  // Fetch contacts from API based on the given page number
  const getData = async (page) => {
    try {
      const res = await fetch(
        `https://randomuser.me/api/?results=6&page=${page}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch contacts.");
      }
      const data = await res.json();
      return data.results;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  // Scroll event handler to load more contacts when conditions are met
  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 100 && !loading && hasMore) {
      setLoading(true);
      // setTime out for delay 1 sec.
      setTimeout(() => {
        setPage((prevPage) => prevPage + 1);
      }, 1000);
    }
  };

  // Effect hook to fetch contacts when the page number changes
  useEffect(() => {
    setLoading(true);
    getData(page)
      .then((res) => {
        if (res.length === 0) {
          setHasMore(false);
        }
        setContacts((prevContacts) => [...prevContacts, ...res]);
      })
      .catch((err) => {
        toast({
          title: "Error",
          description: `Failed to fetch contacts: ${err.message}`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  // Effect hook to add scroll event listener and remove it on cleanup
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    //clean up function call
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Render the ContactList component and Loading component based on loading state
  return (
    <>
      <ContactList contacts={contacts} loading={loading} />
    </>
  );
};

export default Home;
