import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Box } from "@chakra-ui/react";
import AllRoutes from "./Routes/AllRoutes";

const App: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Navbar />
      <AllRoutes />
    </Box>
  );
};

export default App;
