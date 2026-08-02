import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-black text-white p-4'>
      <Navbar />
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App