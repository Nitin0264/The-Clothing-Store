import React from 'react'

function Title({t1, t2, t3, zee}) {
  return (
    <div className='inline-flex flex-col items-center mb-3'>
      {/* Main Heading: Responsive sizes */}
      <div className='flex items-center gap-2 mb-2'>
        <p className='text-gray-500 text-2xl sm:text-3xl uppercase'>{t1} 
          <span className='text-gray-700 font-medium ml-2'>{t2}</span>
        </p>
        {/* Optional: Add a small decorative line like the Hero section */}
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
      </div>

      {/* Subtext: Responsive size and color */}
      <p className='text-xs sm:text-sm md:text-base text-gray-600 text-center max-w-[90%]'>
        {t3}
      </p>
      
      <h1 className='font-bold'>{zee}</h1>
    </div>
  )
}

export default Title