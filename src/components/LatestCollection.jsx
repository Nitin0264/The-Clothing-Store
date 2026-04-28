import React, { useContext } from 'react'
import { userContext } from '../context/UserContext'
import Title from './Title'
import ProductsDisplay from './ProductsDisplay'

function LatestCollection() {
  const { products } = useContext(userContext)

  return (
    <div className='my-10'>
      {/* 1. Title Section: Centered and responsive margin */}
      <div className='text-center py-8 text-3xl'>
        <Title t1="LATEST" t2="COLLECTION" t3="We are the Bestsellers in the codewareit dehradun so far" />
      </div>

      {/* 2. Responsive Grid System */}
      {/* gap-x: space between columns | gap-y: space between rows */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-12'>
        {
          products.slice(30, 45).map((item, index) => (
            <div key={index} className='h-auto w-full'>
              <ProductsDisplay 
                id={item._id} 
                image={item.image[0]} 
                name={item.name} 
                price={item.price} 
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default LatestCollection