import React, { useEffect, useState } from "react";
import ContactList from "../Components/ContactList";
import { useToast } from "@chakra-ui/react";
import { Contact } from "../constains";

// Home component responsible for fetching and displaying a list of contacts
const Home: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const toast = useToast();

  // Fetches contact data from the API
  const getData = async (page: number) => {
    try {
      const res = await fetch(
        `https://randomuser.me/api/?results=12&page=${page}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch contacts.");
      }
      const data = await res.json();
      return data.results;
    } catch (err: any) {
      throw new Error(err.message);
    }
  };

  // Handles scroll event to load more contacts when reaching the end of the page
  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 100 && !loading && hasMore) {
      setLoading(true);
      //Load more contacts after 1sec delay
      setTimeout(() => {
        setPage((prevPage) => prevPage + 1);
      }, 1000);
    }
  };

  // Fetches initial contacts and sets up scroll event listener
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
          position: "bottom-right",
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

  // Adds scroll event listener when the component mounts and removes it when unmounted
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    //cleanup function call
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <ContactList contacts={contacts} loading={loading} />
    </>
  );
};

export default Home;
