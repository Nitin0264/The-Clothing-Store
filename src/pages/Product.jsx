import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { userContext } from '../context/UserContext'

function Product() {
  let { pid } = useParams()
  const [image, setImage] = useState(null)
  const [product1, setProduct1] = useState(false)
  const { products } = useContext(userContext)
  const [size1,setSize1]= useState()

  useEffect(() => {
    const product = products.find(p => p._id === pid);
    // let size = product.sizes.map(i=>{return i})
    // console.log(size)                                            
    if (product && product.sizes) {
      setSize1(product.sizes)
      setImage(product.image[0])
      setProduct1(product)
        }


  }, [products])
   
  return (
    <div className='flex gap-[10px] w-[100%] mx-auto p-[20px] rounded-md'>
      <div className='flex-1'>
       <div className='flex gap-2'>
        <div className='sideImage flex flex-col w-[18%]'>
          {
            product1 && product1.image.map((i)=>(
              <img className='my-2 mx-2' src={i} />
            ))
          }
          </div> 
        <div className='Image w[80%]'>
           <img src={image} alt='Product' /></div> 
       </div>
      </div>
      <div className=' flex flex-col flex-1 items-center gap-2 '>
        <h1 className='font-semibold'>{product1.name}</h1>
        <img className='h-[60px] w-[140px] rounded-md my-4' src='https://www.shutterstock.com/image-vector/five-stars-customer-product-rating-260nw-1432771178.jpg' alt="rating" />
        <p>${product1.price}</p>
        <h1>{product1.description}</h1>
        <h1>{product1.category}</h1>
        <h1 className='font-semibold '>Select Sizes</h1>
        
          <div className="product-display flex  gap-3 mt-5 ">
 
     {size1 && size1.length > 0 ? (
      size1.map((value, index) => (
        <div className='h-[25px] w-[30px] border border-amber-300  flex items-center justify-center shadow-md' key={index}> 
          <h1>{value}</h1>
        </div>
      ))
    ) : (
      <p>No sizes available</p>
    )}
  </div>

      
        <button  className='mt-5 bg-black text-white h-[40px] w-[120px] rounded-md pointer'>Add to cart</button>

        <ol className='mt-5 flex flex-col gap-3'>
          <li>100% genuine and authentic.</li>
          <li>Cash on Delivery (COD) available.</li>
          <li> Premium quality.</li>
          <li> Secure purchase. </li>
        </ol>

      </div>
    </div>
  )
}

export default Product

