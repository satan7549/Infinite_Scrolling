import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../Pages/Login";
import Home from "../Pages/Home";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";

const AllRoutes = () => {
  return (
    <Routes>
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
