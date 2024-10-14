import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoReorderThreeOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { useSelector } from 'react-redux';



function Navbar() {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  // console.log(isLoggedIn);


  const [mobileNav, setMobileNav] = useState(false)

  const navLinks = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Categories",
      path: "/categories"
    },
    {
      name: "All Podcasts",
      path: "/allPodcasts"
    },
    // {
    //   name: "Profile",
    //   path: "/profile"
    // }
  ]
  return (
    <nav className='px-4 md:px-8 lg:px-12 py-2 relative '>
      <div className='flex items-center justify-between'>
        <div className='logo brand-name w-2/6 flex items-center gap-4'>
          <img src="https://e7.pngegg.com/pngimages/503/700/png-clipart-podcast-computer-icons-microphone-youtube-microphone-electronics-internet-radio-thumbnail.png" alt="LOGO"
            className='h-12'
          />
          <Link to="/" className='text-2xl font-bold'>web_Cast</Link >
        </div>
        <div className='hidden w-2/6 lg:flex items-center justify-center'>
          {navLinks.map((items, i) => (
            <Link key={i} to={items.path} className='ms-4 hover:font-semibold transition-all duration-300'>
              {items.name}
            </Link>
          ))}
        </div>
        <div className=' w-2/6 lg:flex items-center justify-end'>  {/*hidden*/}
          {!isLoggedIn && (<> {" "}<Link to="/login" className='px-6 py-3 border border-black rounded-full'>
            Login</Link>
            <Link to="/signup" className='ms-4 px-6 py-3 bg-black text-white rounded-full'>
              SignUp</Link></>)
          }
          {isLoggedIn && <Link to="/profile" className='ms-4 px-6 py-3 bg-black text-white rounded-full'>
            Profile</Link>}
        </div>
        <div className='w-4/6 flex items-center justify-end lg:hidden z-50'>
          <button className={`text-4xl ${mobileNav ? "rotate-360" : "rotate-180"} transition-all duration-300`} onClick={() => setMobileNav(!mobileNav)}>{mobileNav ? <ImCross /> : <IoReorderThreeOutline />}</button>
        </div>
      </div>

      {/*Mobile Nav Start*/}
      <div className={`fixed top-0 left-0 w-full h-screen ${mobileNav ? "translate-y-[0%]" : "translate-y-[-100%]"} transition-all duration-500`}>
        <div className="p-8 flex items-center justify-end text-3xl">
          <button onClick={() => setMobileNav(!mobileNav)} className='bg-black text-white rounded-full p-2'><ImCross /></button>
        </div>
        <div className='h-full flex flex-col items-center justify-center'>
          {""}
          {navLinks.map((items, i) => (
            <Link key={i} to={items.path} className='mb-6 hover:font-semibold transition-all duration-300'>
              {items.name}
            </Link>
          ))}
          <Link to="/login" className='mb-6 hover:font-semibold transition-all duration-300'>
            Login
          </Link>
          <Link to="/signup" className='mb-6 hover:font-semibold transition-all duration-300'>
            signUp
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


{/* <Link to="login" className='px-6 py-3 border border-black rounded-full'>
            Login</Link>
          <Link to="/signup" className='ms-4 px-6 py-3 bg-black text-white rounded-full'>
            SignUp</Link> */}