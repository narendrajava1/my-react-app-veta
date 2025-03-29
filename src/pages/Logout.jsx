import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './css/Logout.css'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/slices/authSlice'
export const Logout = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const location = useLocation()
  // const { email } = location.state || {} //to get from the params
  const navigate = useNavigate()
  const handleClose = () => {
    navigate('/')
  }
  const handleLogOut = () => {
    dispatch(logout())
    navigate('/login')
  }
  return (
    <div className="log-out-cntr">
      <h2>{user.email} want to Logout ?</h2>
      <div className="log-out-cntr-btn">
        <div className="log-out-cntr-btn-content">
          <button onClick={handleLogOut}>Yes</button>
          <button onClick={handleClose}>No</button>
        </div>
      </div>
    </div>
  )
}
