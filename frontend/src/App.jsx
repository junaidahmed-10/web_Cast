import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import MainLayout from './layout/mainLayout'
import Home from './pages/home'
import AuthLayout from './layout/authLayout'
import SignUp from './pages/signUp'
import Login from './pages/login'
import Categories from './pages/categories'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<MainLayout />}>
        {" "}
        <Route index element={<Home />} />
        <Route path='/categories' element={<Categories />} />
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
