import axios from 'axios'
import React, { useState } from 'react'
import { authAction } from '../../store/auth'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
        const [ userData, setUserData] = useState();
    useEffect(() => {
        const fetchUserDetails = async () => {
            const res = await axios.get("http://localhost:5000/api/v1/user-details", {
                withCredentials: true
            })
            setUserData(res.data.user);
        }
        fetchUserDetails();
    }, [])

    const logoutHandler = async () => {
        const res = await axios.post("http://localhost:5000/api/v1/logout", {
            withCredentials : true
        })
        console.log(res);
        dispatch(authAction.logout());
        navigate("/")
    }

    return (
        <>
        {userData && <div className='bg-green-900 rounded py-8 flex flex-col md:flex-row items-center justify-center gap-4 md:justify-between px-4 lg:px-12'>
            <div className="flex flex-col items-center md:items-start">
                <p className='text-zinc-300'>Profile</p>
                <h1 className='my-4 text-3xl md:text-4xl lg:text-5xl text-zinc-100 font-bold text-center'>{userData.username}</h1>
                <p className='text-zinc-300 mt-1'>{userData.email}</p>
            </div>
            <div className="text-zinc-300 mt-1">
                <button onClick={logoutHandler} className='bg-white px-4 py-2 rounded text-zinc-800 font-semibold hover:shadow-xl transition-all duration-300'>
                    Logout
                </button>
            </div>
        </div>}
        </>
    )
}

export default Header