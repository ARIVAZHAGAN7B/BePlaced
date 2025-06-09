import React from 'react'
import Navbar from '../components/navbar/navbar'
import Login from '../pages/Login/Login'
import Companies from '../pages/Companies/Companies'
import Roles from '../pages/Roles/Roles'
import Skills from '../pages/Skills/Skills'
import Jobs from '../pages/Jobs/Jobs'
import UserRoutes from '../routes/UserRoutes/UserRoutes'
import Home from '../pages/Home/Home'
import "./AppLayout.css"
const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
      <UserRoutes/>
      </div>
    </div>
  )
}

export default AppLayout
