import React from 'react'
import Navbar from '../components/navbar/navbar'
import { Outlet } from 'react-router-dom'
import AudioPlayer from '../components/audioPlayer/audioPlayer'

function MainLayout() {
  return (
    <div className='relative'>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <div className="w-full">
        <AudioPlayer />
      </div>
    </div>
  )
}

export default MainLayout