import React from 'react'

function Title({t1,t2,t3,zee}) {
  // console.log(props)
  return (
    <div>
      <h1 className='text-3xl'>{t1} <span className = 'font-semibold'>{t2}</span></h1>
        <h1 className= 'text-xl'>{t3}</h1>
        <h1 className = 'font-bold'>{zee}</h1>
            
    </div>
  )
}

export default Title