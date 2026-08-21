import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import { Toaster } from "react-hot-toast"
import { AuthContext } from '../context/AuthContext'

const App = () => {
  const { authUser } = useContext(AuthContext)
  return (
    <div className='bg-[url("./src/assets/bgImage.svg")] bg-contain'>
      <Toaster/>
      <Routes>
        <Route path='/' element={authUser ? <Home/> : <Navigate to="/login" />}/>
        <Route path='/login' element={!authUser ? <Login/> : <Navigate to="/" />}/>
        <Route path='/profile' element={authUser ? <Profile/> : <Navigate to="/login" />}/>
      </Routes>
    </div>
  )
}

export default App