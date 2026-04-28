import React, { useContext, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { userContext } from '../context/UserContext'

function Navbar() {
  const [visible, setVisible] = useState(false)
  const { gettotalCart } = useContext(userContext)

  return (
    <div className='flex items-center justify-between py-5 font-medium w-[95%] mx-auto'>
      
      {/* --- LOGO --- */}
      <Link to='/'>
        <img className='h-[40px] w-auto' src="src/assets/frontend_assets/logo.png" alt="CodeWareIT" />
      </Link>

      {/* --- DESKTOP NAVIGATION (Hidden on Mobile) --- */}
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to="/" className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to="/Collection" className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to="/About" className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to="/Contact" className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      {/* --- ICONS (Search, Cart, and Hamburger) --- */}
      <div className='flex items-center gap-6'>
        <img className='h-[22px] cursor-pointer' src="src/assets/frontend_assets/search_icon.png" alt="Search" />
        
        <Link to="/CartItems" className='relative'>
          <img className='h-[22px] w-auto' src="src/assets/frontend_assets/cart_icon.png" alt="Cart" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-cyan-800 text-white aspect-square rounded-full text-[8px]'>
            {gettotalCart()}
          </p>
        </Link>

        {/* Hamburger Menu Icon (Visible only on Mobile) */}
        <img 
          onClick={() => setVisible(true)} 
          className='h-[22px] cursor-pointer sm:hidden' 
          src="src/assets/frontend_assets/menu_icon.png" 
          alt="Menu" 
        />
      </div>

      {/* --- MOBILE SIDEBAR MENU --- */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-50 ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600 h-full'>
          
          {/* Back Button to close menu */}
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-4 cursor-pointer border-b'>
            <img className='h-4 rotate-180' src="src/assets/frontend_assets/dropdown_icon.png" alt="Back" />
            <p className='font-semibold'>Back</p>
          </div>

          {/* Mobile Links */}
          <NavLink onClick={() => setVisible(false)} className='py-4 pl-6 border-b' to='/'>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-4 pl-6 border-b' to='/Collection'>COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-4 pl-6 border-b' to='/About'>ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-4 pl-6 border-b' to='/Contact'>CONTACT</NavLink>
        </div>
      </div>

    </div>
  )
}

export default Navbar