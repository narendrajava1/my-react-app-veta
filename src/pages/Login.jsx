import React, { useState } from 'react'
import './css/Login.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../redux/slices/authSlice'
export const Login = () => {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  // const [name, setName] = useState('')
  // const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const handleInputChange = (e) => {
    const { name, value } = e.target

    setUser((userData) => ({ ...userData, [name]: value }))
  }

  const handleLogin = async () => {
    console.log(user.email)
    const success = await mockApiLogin(user.email, user.password)
    if (!success) {
      setLoginError('Login failed. Please check your credentials.')
      setIsModalVisible(true)
    } else {
      setLoginError('') // Clear error if login is successful
      // Redirect or update UI upon successful login (you can use navigate in React Router)
      alert('Login successful!')
      navigation('/home')
      setIsModalVisible(false)
    }
  }

  // Close modal on button click
  const closeModal = () => {
    setIsModalVisible(false)
    setLoginError('')
  }

  const mockApiLogin = (email, password) => {
    const fakeUser = { password: password, email: email, role: 'admin' } // Simulating a user object
    const fakeToken = 'fake-jwt-token' // Simulating an authentication token
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'kolli7571@gmail.com' && password === '123456789') {
          // Dispatch the login action with user and token
          dispatch(login({ user: fakeUser, token: fakeToken }))
          resolve(true)
        } else {
          resolve(false)
        }
      }, 1000)
    })
  }
  return (
    <div className="login-cntr">
      <div className="login-cntr-box">
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
        />
        <button className="login-cntr-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
      {/* Error Modal (popup) */}
      {isModalVisible && (
        <div className="error-modal">
          <div className="error-content">
            <p>{loginError}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}
