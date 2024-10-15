import React from 'react'
import { useSelector } from 'react-redux'
import ErrorPage from './errorPage'
import Header from '../components/profile/header'
import YourPodcasts from '../components/profile/yourPodcasts'

function Profile() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  return (
    <div>
      {
        isLoggedIn ? <><Header /><YourPodcasts /></> : <ErrorPage />
      }
    </div>
  )
}

export default Profile