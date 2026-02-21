import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
    <div className = 'flex justify-between w-[95%] mx-auto'>
    <div><img  className ='h-[45px] w-auto' src="src\assets\frontend_assets\logo.png" alt="CodeWareIT" /></div>

    <div className = 'flex gap-5 '>

      <NavLink to= "/"> Home <hr /> </NavLink>
      <NavLink to ="/Collection">Collection  <hr /></NavLink>
       <NavLink to ="/About">About  <hr /></NavLink>
       <NavLink to ="Contact">Contact <hr /></NavLink>
    </div>
    <div className = 'flex gap-5'>
        <img className = 'h-[25px] w-auto'  src="src\assets\frontend_assets\search_icon.png" alt="Search-button" />
 
      <img className = 'h-[25px] w-auto' src="src\assets\frontend_assets\cart_icon.png" alt="Cart-button" /></div>
    </div>
    </div>
  )
}

export default Navbar