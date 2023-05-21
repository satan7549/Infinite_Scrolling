import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../Pages/Login";
import Home from "../Pages/Home";

import ErrorPage from "../Pages/ErrorPage";
import { AuthContext } from "../Context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import { AuthContextType } from "../constains";

const AllRoutes: React.FC = () => {
  const { isAuthenticated } = useContext<AuthContextType>(
    AuthContext as React.Context<AuthContextType>
  );

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AllRoutes;
