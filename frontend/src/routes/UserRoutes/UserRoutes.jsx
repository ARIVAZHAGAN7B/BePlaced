import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../../pages/Login/Login'
import Companies from '../../pages/Companies/Companies'
import Roles from '../../pages/Roles/Roles'
import Skills from '../../pages/Skills/Skills'
import Jobs from '../../pages/Jobs/Jobs'
import Home from '../../pages/Home/Home'
import Notifications from '../../components/Notifications/Notifications'
import Mail from '../../components/Mail/Mail'
import Profile from "../../pages/Profile/Profile"
const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/companies" element={<Companies/>}/>
      <Route path="/roles" element={<Roles/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/jobs" element={<Jobs/>}/>
      <Route path='/notification' element={<Notifications/>}/>
      <Route path="/mail" element={<Mail/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  )
}

export default UserRoutes
