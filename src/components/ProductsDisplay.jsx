import React from 'react'
import {Link} from 'react-router-dom'
function ProductsDisplay({index,image,id,name}) {
  return (
    <Link to={`/products/${id}`} key={index} className='h-[320px] w-[220px]'>
      <img src={image} alt="Products" />
      <h1>{name}</h1>
      {/* creating the parems here to pass  */}
    </Link >

  )
}

export default ProductsDisplay