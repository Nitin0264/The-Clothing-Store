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
        <div className= 'flex flex-wrap gap-4 items-center justify-center mt-5'>
          {
           products.slice( 0,4).filter( i => i.bestseller).map((i,index) => 
            <div className='h-[320px] w-[250px]'>
              <ProductsDisplay id={i._id} key={index}  index={index} image = {i.image[0]} name= {i.name} />
            </div>
          )}
          {/*  <h1>{i.name}</h1>)} */}
        </div>
      </div>
    </div>
  )
}

export default BestSeller

