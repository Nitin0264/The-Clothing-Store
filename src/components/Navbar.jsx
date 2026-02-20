import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
    <div className = 'flex justify-between w-[95%] mx-auto'>
    <div><img  className ='h-[45px] w-auto' src="src\assets\frontend_assets\logo.png" alt="CodeWareIT" /></div>

    <div className = 'flex gap-5 '>

      <NavLink to= "/">Home </NavLink>
      <NavLink to ="/Collection">Collection </NavLink>
      <NavLink to ="/About">About </NavLink>
      <NavLink to ="Contact">Contact </NavLink>
    </div>
    <div className = 'flex gap-5'>
        <img className = 'h-[25px] w-auto'  src="src\assets\frontend_assets\search_icon.png" alt="Search-button" />
 
      <img className = 'h-[25px] w-auto' src="src\assets\frontend_assets\cart_icon.png" alt="Cart-button" /></div>
    </div>
    </div>
  )
}

export default Navbar