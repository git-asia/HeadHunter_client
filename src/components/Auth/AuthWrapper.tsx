import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface AuthWrapperProps {
  isLoggedIn: boolean;
}

export const AuthWrapper: React.FC<AuthWrapperProps> = ({ isLoggedIn }) =>
    isLoggedIn ? <Outlet/> : <Navigate to="/auth/login" />;