import React from 'react'
import './css/Signup.css'
import { useNavigate } from 'react-router-dom'
export const Signup = () => {
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/login')
  }

  const handleSignup = () => {}
  return (
    <div className="signup-cntr">
      <h2>Welcome to veta diary</h2>
      <h3>Signup</h3>
      <div className="signup-cntr-form">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" />
        <label htmlFor="mobileNumber">Mobile Number</label>
        <input type="text" name="mobileNumber" />
        <label htmlFor="state">State</label>
        <input type="text" name="state" />
        <label htmlFor="district">District</label>
        <input type="text" name="district" />
        <label htmlFor="village">Village</label>
        <input type="text" name="village" />
        <label htmlFor="role">Role</label>
        <select name="role">
          <option value="">Select Role</option>
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>
        <div className="signup-cntr-form-btn-box">
          <button className="signup-cntr-form-btn" onClick={handleSignup}>
            Signup
          </button>
          <span>Already have an account?</span>
          <button className="signup-cntr-form-btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
      <div className="signup-sucess-pop-up-modal">
        <div className="signup-sucess-pop-up-modal-content">
          <p>Please Login with new credentails</p>
          <button className="signup-cntr-form-btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
