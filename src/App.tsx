import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Box } from "@chakra-ui/react";
import AllRoutes from "./Routes/AllRoutes";

// App component is a entry point of the application
const App: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" >
      {/* The Navbar component is rendered at the top of the application */}
      <Navbar />
      {/* The AllRoutes component is responsible for rendering different routes based on the current URL */}
      <AllRoutes />
    </Box>
  );
};

export default App;
