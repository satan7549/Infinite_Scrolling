import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

// Custom PrivateRoute component to handle authentication
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  //   const { pathname } = useLocation();

  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
