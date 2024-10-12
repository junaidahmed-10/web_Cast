import React from 'react'
import Navbar from '../components/navbar/navbar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className='w-full'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default MainLayout