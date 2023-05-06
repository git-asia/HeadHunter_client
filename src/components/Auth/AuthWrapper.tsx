import React from 'react';
import { Navigate } from "react-router-dom";

interface AuthWrapperProps {
  isLoggedIn: boolean;
  children: React.ReactNode
}

export const AuthWrapper: React.FC<AuthWrapperProps> = ({ isLoggedIn, children }) => {
  return isLoggedIn ? <>{children}</> : <Navigate to="/" />;
};