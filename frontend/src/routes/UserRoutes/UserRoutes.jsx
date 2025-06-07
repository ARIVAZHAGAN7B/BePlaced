import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../../pages/Login/Login'
import Companies from '../../pages/Companies/Companies'
import Roles from '../../pages/Roles/Roles'
import Skills from '../../pages/Skills/Skills'
import Jobs from '../../pages/Jobs/Jobs'
const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/companies" element={<Companies/>}/>
      <Route path="/roles" element={<Roles/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/jobs" element={<Jobs/>}/>
    </Routes>
  )
}

export default UserRoutes
