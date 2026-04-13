import { Navigate } from 'react-router-dom'

export function GuestGuard({ children }) {
  const isAuthenticated = false

  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return children
}