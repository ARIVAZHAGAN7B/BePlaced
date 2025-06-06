import React from 'react'
import Navbar from '../components/navbar/navbar'
import Login from '../pages/Login/Login'
import Companies from '../pages/Companies/Companies'
import Roles from '../pages/Roles/Roles'
import Skills from '../pages/Skills/Skills'
import "./AppLayout.css"
const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Login/>
        <Companies/>
        <Roles/>
        <Skills />
      </div>
    </div>
  )
}

export default AppLayout
