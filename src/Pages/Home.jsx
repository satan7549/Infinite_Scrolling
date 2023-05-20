import React, { useEffect, useState } from "react";
import ContactList from "../Components/ContactList";

// Define the HomeTest component
const Home = () => {
  // State variables using useState hook
  const [contacts, setContacts] = useState([]); // Stores the loaded contacts
  const [page, setPage] = useState(1); // Tracks the current page number
  const [loading, setLoading] = useState(false); // Indicates if contacts are being loaded
  const [hasMore, setHasMore] = useState(true); // Indicates if there are more contacts to load

  // Fetch contacts from API based on the given page number
  const getData = async (page) => {
    try {
      let res = await fetch(
        `https://randomuser.me/api/?results=6&page=${page}`
      );
      res = await res.json();
      return res.results;
    } catch (err) {
      return err;
    }
  };

  // Scroll event handler to load more contacts when conditions are met
  const handleScroll = () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.scrollHeight - 200 &&
        !loading &&
        hasMore
      ) {
        setLoading(true);
        setTimeout(() => {
          setPage((prevPage) => prevPage + 1);
        }, 1000); // Delay of 1 second before loading more contacts
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Effect hook to fetch contacts when the page number changes
  useEffect(() => {
    getData(page)
      .then((res) => {
        if (res.length === 0) {
          setHasMore(false);
        }
        setContacts((prevContacts) => [...prevContacts, ...res]);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [page]);

  // Effect hook to add scroll event listener and remove it on cleanup
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

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
