import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/nav/NavBar'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { About } from './pages/About'
import { Login } from './pages/Login'
import { Logout } from './pages/Logout'
import { Signup } from './pages/Signup'
const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    children: [
      {
        index: true,
        element: <Signup />,
      },
      {
        path: 'home',
        element: <Home />,
      },

      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'logout',
        element: <Logout />,
      },
    ],
  },
])
function App() {
  return <RouterProvider router={router} />
}

export default App
