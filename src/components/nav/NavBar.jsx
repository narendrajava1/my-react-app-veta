import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {} from './NavBar.css'
import { useDispatch, useSelector } from 'react-redux'

export const NavBar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth)
  // const dispatch = useDispatch()
  //   handleLogin=()=>{

  // return("")
  //   }
  return (
    <div>
      <nav className="nav-cntr">
        <h2>VETA</h2>
        <ul className="nav-list">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/login">{!isAuthenticated ? 'Login' : user.email}</Link>
          </li>
          <li>
            <Link to="/logout" style={{pointerEvents:(user?.email)?'auto':'none',opacity:(user?.email)?1:0.5}}>Logout</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
