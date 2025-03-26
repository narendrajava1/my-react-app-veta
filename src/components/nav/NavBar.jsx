import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {} from './NavBar.css'

export const NavBar = () => {
  return (
    <div>
      <nav className="nav-cntr">
        <h2>VETA</h2>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
