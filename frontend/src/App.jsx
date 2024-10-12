import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import MainLayout from './layout/mainLayout'
import Home from './pages/home'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
