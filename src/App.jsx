import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/nav/NavBar'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { About } from './pages/About'
const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    children: [
      {
        index: true,
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
    ],
  },
])
function App() {
  return <RouterProvider router={router} />
}

export default App
