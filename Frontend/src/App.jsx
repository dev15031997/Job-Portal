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
import AdminJobs from './components/admin/AdminJobs';
import PostJob from './components/admin/PostJob';
import Applicants from './components/admin/Applicants';


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
  {
    path:"/admin/jobs",
    element: <AdminJobs />
  },
  {
    path:"/admin/jobs/create",
    element: <PostJob />
  },
   {
    path:"/admin/jobs/:id/applicants",
    element: <Applicants />
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