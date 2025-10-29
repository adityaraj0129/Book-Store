import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import BookDetails from './Pages/BookDetails'
import Favorites from './Pages/Favorites'
import './style.css'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'

const App = () => {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/bookdetails' element={<BookDetails/>} />
      <Route path='/favorites' element={<Favorites/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
    </Routes>
   </Router>
  )
}

export default App