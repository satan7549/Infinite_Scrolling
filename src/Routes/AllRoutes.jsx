import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../Pages/Login";
import Home from "../Pages/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
