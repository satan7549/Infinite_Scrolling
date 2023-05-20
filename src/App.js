import "./App.css";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
