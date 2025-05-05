import './App.css';
import Companies from './components/admin/Companies';
import CompanyCreate from './components/admin/CompanyCreate';
import CompanySetup from './components/admin/CompanySetup';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Browse from './components/Browse';
import Home from './components/Home';
import JobDescription from './components/JobDescription';
import Jobs from './components/Jobs';
import Profile from './components/Profile';
import Navbar from './components/shared/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: "/jobs",
    element: <Jobs />
  },
  {
    path: "/description/:id",
    element: <JobDescription />
  },
  {
    path: "/browse",
    element: <Browse />
  },
  {
    path: "/profile",
    element: <Profile />
  },

  // Admin ROutes
  {
    path:"/admin/companies",
    element: <Companies/>
  },
  {
    path:"/admin/companies/create",
    element: <CompanyCreate/>
  },
  {
    path:"/admin/companies/:id",
    element: <CompanySetup/>
  },

])
function App() {

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App