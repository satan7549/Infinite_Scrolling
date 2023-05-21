import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Box } from "@chakra-ui/react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route
          path="/login"
          element={
            <Login onLogin={handleLogin} isAuthenticated={isAuthenticated} />
          }
        />
        <Route
          path="/home"
          element={
            isAuthenticated ? <Home /> : <Navigate to="/login" replace={true} />
          }
        />
      </Routes>
    </Box>
  );
}

export default App;
