import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
import { AuthContextType } from "../constains";

interface PrivateRouteProps {
  children: React.ReactNode;
}

// PrivateRoute component handles routing for authenticated users
const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isAuthenticated } = useContext<AuthContextType>(
    AuthContext as React.Context<AuthContextType>
  );

  // If the user is authenticated, render the children components
  // Otherwise, navigate to the login page
  if (isAuthenticated) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
