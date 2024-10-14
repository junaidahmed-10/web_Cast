import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import './App.css'
import MainLayout from './layout/mainLayout'
import Home from './pages/home'
import AuthLayout from './layout/authLayout'
import SignUp from './pages/signUp'
import Login from './pages/login'
import Categories from './pages/categories'
import Profile from './pages/profile'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { authAction } from './store/auth'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://localhost:5173/check-cookie", {
          withCredentials: true
        })
        console.log(res);
        if (res.data.message === true) {
          dispatch(authAction.login())
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetch()
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {" "}
            <Route index element={<Home />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path="/" element={<AuthLayout />}>
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
