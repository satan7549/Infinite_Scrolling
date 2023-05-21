import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const authState = localStorage.getItem("authState");

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(authState === "true");

  useEffect(() => {
    localStorage.setItem("authState", isAuthenticated.toString());
  }, [isAuthenticated]);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  //   useEffect(() => {
  //     localStorage.setItem("authState", isAuthenticated);
  //   }, [isAuthenticated]);

  //   const login = () => {
  //     setIsAuthenticated(true);
  //   };

  //   const logout = () => {
  //     setIsAuthenticated(false);
  //   };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
