import React, { createContext, useEffect, useState, ReactNode } from "react";
import { AuthContextType } from "../constains";

export const AuthContext = createContext<AuthContextType | null>(null);

const authState = localStorage.getItem("authState");

export const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
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

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
