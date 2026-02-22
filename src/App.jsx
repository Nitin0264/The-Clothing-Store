import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Hero from './components/Hero'

function App() {
  return (
    <div className = 'mt-2 mb-7 w-[85%] mx-auto'>
        <Navbar />
     <Routes>
      <Route path = '/' element = {<Home />}  />
      <Route path ='/Collection' element = {<Collection />} />
       <Route path = '/About' element = {<About />} />
       <Route path  =  '/Contact' element = {<Contact />} />

      </Routes>

    </div>
  )
}

export default App