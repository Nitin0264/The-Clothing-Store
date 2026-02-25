import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { userContext } from '../context/UserContext'

function Navbar() {
  const [display,setDisplay] =  useState(false)
  let {gettotalCart} = useContext(userContext)
  return (
    <div className=' w-[95%] mx-auto'>
      {/* for the Navbar */}
    <div className = ' hidden sm:flex  sm:justify-between'>
    <div><img  className ='h-[45px] w-auto' src="src\assets\frontend_assets\logo.png" alt="CodeWareIT" /></div>

    <div className = 'flex gap-5  '>

      <NavLink to= "/"> Home <hr /> </NavLink>
      <NavLink to ="/Collection">Collection  <hr /></NavLink>
       <NavLink to ="/About">About  <hr /></NavLink>
       <NavLink to ="Contact">Contact <hr /></NavLink>
    </div>
    <div className = 'flex gap-5'>
        <img className = 'h-[25px] w-auto'  src="src\assets\frontend_assets\search_icon.png" alt="Search-button" />
        {/* the add to cart button display */}
           <div className='relative'>
               <div className=''>
                <img className = 'h-[25px] w-auto' src="src\assets\frontend_assets\cart_icon.png" alt="Cart-button" />
               </div>
            <div className='absolute top-[13px] right-[-5px]'>
            <p className='h-[20px] w-[20px]  rounded-2xl text-white bg-cyan-800 text-center '>{gettotalCart()}</p>
            </div>
      </div>
      </div>
    </div>

    {/* for the hemberger */}
    <div className = 'flex justify-between block sm:hidden w-full '>
      <div className='flex flex-col '>
        <button className='h-[40px] w-[100px] bg-blue-500 text-white rounded-lg'
         onClick={()=> setDisplay(!display)}> {display ? "close": "Menu"}</button>

    <div className ={`flex flex-col gap-2 overflow-hidden transition-all duration-300 ${display? "w-full":" hidden w-0"}`}>
      {/* we just added the hidden above in the else part so that it will remove all the space it was taking so far */}

      {/* <button onClick={ ()=> setDisplay(true) } className=''>Click Here</button> */}

      <NavLink to= "/"> Home </NavLink>
      <NavLink to ="/Collection">Collection </NavLink>
       <NavLink to ="/About">About </NavLink>
       <NavLink to ="Contact">Contact</NavLink>
    </div>
   
   </div>
    <div><img  className ='h-[45px] w-auto' src="src\assets\frontend_assets\logo.png" alt="CodeWareIT" /></div>


    <div className = 'flex gap-5'>
        <img className = 'h-[25px] w-auto'  src="src\assets\frontend_assets\search_icon.png" alt="Search-button" />
 
      <img className = 'h-[25px] w-auto' src="src\assets\frontend_assets\cart_icon.png" alt="Cart-button" /></div>
    </div>
    </div>
  )
}

export default Navbar