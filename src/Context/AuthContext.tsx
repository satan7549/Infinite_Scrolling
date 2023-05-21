import React, { createContext, useEffect, useState, ReactNode } from "react";
import { AuthContextType } from "../constains";

// Create a context for authentication-related data and actions
export const AuthContext = createContext<AuthContextType | null>(null);

// Retrieve authentication state from local storage
const authState = localStorage.getItem("authState");

// AuthContextProvider component responsible for managing authentication state
export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Set initial authentication state based on local storage value
  const [isAuthenticated, setIsAuthenticated] = useState(
    authState === "true"
  );

  // Update local storage with the latest authentication state
  useEffect(() => {
    localStorage.setItem("authState", isAuthenticated.toString());
  }, [isAuthenticated]);

  // Handle user login by updating the authentication state to true
  const login = () => {
    setIsAuthenticated(true);
  };

  // Handle user logout by updating the authentication state to false
  const logout = () => {
    setIsAuthenticated(false);
  };

  // Provide the authentication state and login/logout functions to child components
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
