import React from 'react'
import { useSelector } from 'react-redux'
import InputPodcasts from '../components/addPodcasts/inputPodcasts'
import ErrorPage from './errorPage'

function AddPodcasts() {

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  return (
    <div> 
        { isLoggedIn ? <InputPodcasts /> : <ErrorPage /> }
    </div>
  )
}

export default AddPodcasts