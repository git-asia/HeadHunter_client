import React from 'react';

interface AuthWrapperProps {
  isLoggedIn: boolean;
};

export const AuthWrapper: React.FC<AuthWrapperProps> = (isLoggedIn) => {
  return isLoggedIn
};