import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { userContext } from '../context/UserContext'

function Product() {
  let { pid } = useParams()
  const { products } = useContext(userContext)

  const product = products.find(p => p._id === pid);
  if (!products) return <h2>produts Not   </h2>
  return (
    <div className='flex gap-[10px] w-[100%] mx-auto p-[20px] bg-emerald-50 rounded-md'>
      <div className='flex-1'>
        <img src={product.image} alt='Product' />
      </div>
      <div className=' flex flex-col flex-1 items-center gap-2 '>
        <h1 className='font-semibold'>{product.name}</h1>
        <img className='h-[60px] w-[140px] rounded-2xl' src='https://www.shutterstock.com/image-vector/five-stars-customer-product-rating-260nw-1432771178.jpg' alt="rating" />
        <p>${product.price}</p>
        <h1>{product.description}</h1>
        {/* <h1>{product.category}</h1> */}
        <h1 className='font-semibold '>Select Sizes</h1>
        <div className='flex  gap-3 mt-5 '>
          {/* <h1>{product.sizes}</h1> */}
          {product.sizes.map((size, index) => <div key={index}>
            <div className='h-[30px] w-[30px] border-2 border-grey-700 items-center justify-center flex'>
              {size}
            </div>
          </div>)}
        </div>
        <button className='mt-5 bg-black text-white h-[40px] w-[120px] rounded-md pointer'>Add to cart</button>

        <l className='mt-5 flex flex-col gap-3'>
          <li>100% genuine and authentic.</li>
          <li>Cash on Delivery (COD) available.</li>
          <li> Premium quality.</li>
          <li> Secure purchase. </li>
        </l>

      </div>
    </div>
  )
}

export default Product

