import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/nav/NavBar'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { About } from './pages/About'
import { Login } from './pages/Login'
import { Logout } from './pages/Logout'
import { Signup } from './pages/Signup'
import { useSelector } from 'react-redux'
import { ProtectedRoute } from './components/ProtectedRoute'
import NotFound from './pages/NotFound'
import { Admin } from './pages/Admin'
import { Suspense } from 'react'
// Loading Spinner (Fallback UI for Suspense)
const Loading = () => <div>Loading...</div>
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
        element: (
          <ProtectedRoute requiredRole={'user'}>
            <Dashboard />
          </ProtectedRoute>
        ),
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
      {
        path: '403',
        element: <NotFound />,
      },
      {
        path: 'admin',
        element: (
          <Suspense fallback={<Loading />}>
            <ProtectedRoute requiredRole={'admin'}>
              <Admin />
            </ProtectedRoute>
          </Suspense>
        ),
      },
    ],
  },
])
function App() {
  return <RouterProvider router={router} />
}

export default App
