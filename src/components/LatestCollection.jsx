import React, { useContext } from 'react'
import { userContext } from '../context/UserContext'
import { products } from '../assets/frontend_assets/assets'
import ProductItem from './ProductItem'
import Title from './Title'
import ProductsDisplay from './ProductsDisplay'

function LatestCollection() {
  const {products} = useContext(userContext)
  return (
     <div>
    <div className = 'flex flex-col'>
    <div className = 'flex flex-col items-center justify-center my-5 '>
    {/* <h1>Latest Collection</h1> */}
    <Title t1="lastest" t2="Collection"/>
    {/* <h1>We are the Bestsellers in the codewareit dehradun so far</h1> */}
       <Title t3='We are the Bestsellers in the codewareit dehradun so far' />
    </div>
     <div className='flex flex-wrap gap-4 items-center justify-center'> 
      {
        products.slice(12,24).map( (i,index)=> ( <div className = 'h-[320px] w-[240px] ' key ={index}>
         {/* {<ProductsDisplay name={i.name} img src={img[0]}  />} */}
         <ProductsDisplay id={i._id} key={index}  index={index} image = {i.image[0]} name= {i.name} />
        
        
           {/* <img src={i.image[0]} alt="" /> */}
           {/* <h1>{i.name}</h1>  */}
           {/* <h1>{i.category}</h1>   */}
           {/* { <ProductItem  name = {i.name} />} */}
             
           </div> ))
      }
     </div>
      
     </div>
     </div>
  )
}

export default LatestCollection