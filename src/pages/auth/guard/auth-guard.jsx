import { Navigate } from 'react-router-dom'

export function AuthGuard({ children }) {
  const isAuthenticated = false // remplace par ton vrai état auth

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />
  }

  return children
}