import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../Pages/Login";
import Home from "../Pages/Home";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import { AuthContext } from "../Context/AuthContext";

const AllRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);
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
