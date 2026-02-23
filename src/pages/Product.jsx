import React from 'react'
import { useParams } from 'react-router-dom'

function Product() {
  let {pid} = useParams()
  
  console.log(pid)
  return (
    <div>Product</div>
  )
}

export default Product