import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { userContext } from '../context/UserContext'

function Product() {
  let {pid} = useParams()
  const {products} = useContext(userContext)

  const product = products.find(p=> p._id === pid) ;
  if(!products) return <h2>produts Not found</h2>
  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt='Product' />
      <h1>{product.category}</h1>
    </div>
  )
}

export default Product

// import React, { useContext, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { userContext } from '../context/UserContext'

// function Product() {
//   let {pid} = useParams()
//   const {products} = useContext(userContext)
//   // let {data,setData} = useState()

// const product = products.find(p=> p._id === pid);
//  if(!product) return <h2>Product not found</h2>

//   return (
//     <div>
      
//        <h1>{product.name}</h1>
//        <p>price:${product.price}</p>
//         <img src={product.image} alt ={product.name} />     
//     </div>
//   )
// }

// export default Product