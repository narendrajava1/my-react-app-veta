import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './css/Logout.css'
export const Logout = () => {
  const [isLogOut, setIsLogOut] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const location = useLocation()
  const { email } = location.state || {}
  const navigate = useNavigate()
  const handleClose = () => {
    navigate('/')
  }
  const handleLogOut = () => {
    navigate('/login')
  }
  return (
    <div className="log-out-cntr">
      <h2>{email} want to Logout ?</h2>
      <div className="log-out-cntr-btn">
        <div className="log-out-cntr-btn-content">
          <button onClick={handleLogOut}>Yes</button>
          <button onClick={handleClose}>No</button>
        </div>
      </div>
    </div>
  )
}
