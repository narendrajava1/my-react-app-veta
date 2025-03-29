import { React, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// Check if the user is authenticated from Redux state
export const ProtectedRoute = ({ children, requiredRole }) => {
  const navigate = useNavigate()
  const { isAuthenticated, user } = useSelector((state) => state.auth)
  useEffect(() => {
    if (!user && !isAuthenticated) {
      // Redirect to login if not authenticated
      navigate('/login')
    }
    if (user.role !== requiredRole) {
      navigate('/403')
    }
  }, [isAuthenticated, navigate])

  return children
}
