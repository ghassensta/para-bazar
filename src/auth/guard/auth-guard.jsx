import React from 'react';
import { Navigate } from 'react-router-dom';

export function AuthGuard({ children }) {
  // TODO: Implement actual authentication logic
  // For now, we'll allow access - replace with real auth check
  const isAuthenticated = false; // Set to true for testing, or implement real auth
  
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }
  
  return <>{children}</>;
}
