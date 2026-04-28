import React from 'react'

function Hero() {
  return (
    <div className=''> 
      {/* 1. Container: Flex direction changes at 'md' breakpoint */}
      <div className='flex flex-col md:flex-row w-[90%] sm:w-[85%] mx-auto h-auto shadow-md'>
        
        {/* 2. Left/Top Side: Text Content */}
        <div className='flex flex-1 flex-col items-center justify-center text-center py-10 md:py-0 gap-4'>
            <div className='flex items-center gap-2'>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                <h1 className='text-sm md:text-base font-medium'>OUR BESTSELLERS</h1>
            </div>
            
            <h1 className='text-3xl sm:py-3 lg:text-5xl font-bold leading-relaxed'>LATEST ARRIVALS</h1>
            
            <div className='flex items-center gap-2 cursor-pointer'>
                <h1 className='text-sm md:text-base font-semibold'>SHOP NOW</h1>
                <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
            </div>
        </div>

        {/* 3. Right/Bottom Side: Image */}
        <div className='flex-1'>
            <img 
              className='w-full h-full object-cover' 
              src="src/assets/frontend_assets/hero_img.png" 
              alt="Hero img"
            /> 
        </div> 

      </div> 
    </div>  
  )
}

export default Hero