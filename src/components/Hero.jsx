import React from 'react'

function Hero() {
  return (
    <div> 
    <div className = 'flex w-[85%] mx-auto h-auto shadow-md'>
      <div className= 'flex flex-1  flex-col items-center justify-center text-center gap-4'>
              <h1 className ='text-2xl font-semibold '>OUR BESTSELLERS</h1>
              <h1 className ='text-4xl font-bold'>LATEST ARRIVLS</h1>
              <h1 className ='text-2xl font-semibold '>SHOP NOW</h1>
    </div>
    <div className = 'flex-1'><img  src="src\assets\frontend_assets\hero_img.png" alt="Hero img"/> </div> 

    </div> 
    </div> 
  )
}

export default Hero