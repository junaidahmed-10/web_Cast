import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ErrorPage from './errorPage'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';
import axios from "axios"


function SignUp() {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const navigate = useNavigate()
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: ""
    })

    const change = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }
    const handleSubmit = async () => {
        try {
            const res = await axios.post("http://localhost:5000/api/v1/signUp", values);
            toast.success(res.data.message);
            navigate('/')
        } catch (error) {
            toast.error(error.response.data.message)
            console.log("handleSubmit: ", error);
        }
    }

    return (
        <>   {isLoggedIn ? <ErrorPage /> : <div className='h-screen bg-green-100 flex items-center justify-center'>
            <ToastContainer />
            <div className='w-4/6 md:w-3/6 lg:w-2/6 flex flex-col items-center justify-center'>
                <Link to="/" className='text-2xl font-bold'>
                    PODCASTS
                </Link>
                <div className='mt-6 w-full'>
                    <div className='w-full flex flex-col'>
                        <label htmlFor="">UserName</label>
                        <input type="text" className='mt-2 px-2 py-2 rounded outline-none border border-black' required
                            placeholder='UserName' name='username' value={values.username} onChange={change} />
                    </div>
                    <div className='w-full flex flex-col mt-2'>
                        <label htmlFor="">Email</label>
                        <input type="email" className='mt-2 px-2 py-2 rounded outline-none border border-black' required
                            placeholder='Email' name='email' value={values.email} onChange={change} />
                    </div>
                    <div className='w-full flex flex-col mt-2'>
                        <label htmlFor="">Password</label>
                        <input type="Password" className='mt-2 px-2 py-2 rounded outline-none border border-black' required
                            placeholder='Password' name='password' value={values.password} onChange={change} />
                    </div>
                    <div className='w-full flex flex-col mt-4'>
                        <button className='bg-green-900 font-semibold text-xl text-white rounded py-2'
                            onClick={handleSubmit}>signUp</button>
                    </div>
                    <div className='w-full flex flex-col mt-4'>
                        <p className='text-center'>
                            Already have an account? <Link to="/login" className='font-semibold hover:text-blue-600'>Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>}</>

    )
}

export default SignUp