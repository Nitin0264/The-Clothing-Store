import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { userContext } from '../context/UserContext'
import ProductsDisplay from './ProductsDisplay'

function BestSeller() {
  const { products } = useContext(userContext)
  // const [best, setBest] = useState([])
  // let data = products.filter(i => i.bestseller)
  
  // useEffect(() => {
  //   // console.log(data)
  //   // setBest(data.slice(0,6)) 
    
  // }, [])
  
  return (
    <div>
      <div>
        <div className='flex flex-col items-center justify-center gap-1 mt-[25px]'>
          <Title t1='Best ' t2='Sellers' />
          <Title t3='We are the bestSellers all around the world so far' />
        </div>
        <div className= 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center justify-center mt-5 gap-y-10'>
          {
           products.filter( i => i.bestseller).slice(0,5).map((i,index) => 
            <div  key={index} className='h-auto w-full'>
              <ProductsDisplay id={i._id} key={index}   image = {i.image[0]} name= {i.name} />
            </div>
          )}
          {/*  <h1>{i.name}</h1>)} */}
        </div>
      </div>
    </div>
  )
}

export default BestSeller

