import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { userContext } from '../context/UserContext'
import ProductsDisplay from '../components/ProductsDisplay'
// import SuggestedProducts from '../components/SuggestedProducts'

function Product() {
  let { pid } = useParams()
  const [image, setImage] = useState(null)
  const [product1, setProduct1] = useState(false)
  const [suggestedProduct, setSuggestedProduct] = useState([])
  const { products } = useContext(userContext)
  const [size1, setSize1] = useState('')
  const { addtocart } = useContext(userContext)

  useEffect(() => {
    const product = products.find(p => p._id === pid);
    if (product) {
      // console.log(product)
      setProduct1(product)
      setImage(product.image[0])
    }

  }, [products])

  useEffect(()=>{
console.log(size1)
  },[size1])
  return (

    //  <Link to={`/products/${id}`} key={index} className='h-[320px] w-[220px] '></Link>

    <>
      {
        product1 ?
          <div>
            <div className='flex gap-[15px] w-[100%] mx-auto p-[20px] rounded-md'>
              <div className='flex-1'>
                <div className='flex gap-5'>
                  <div className='sideImage flex flex-col w-[18%]'>
                    {
                      product1 && product1.image.map((i, index) => (<div key={index} className='my-2 mt-[10px]'>
                        <img className='my-2 mx-2' src={i} />
                      </div>))
                    }
                  </div>
                  <div className='Image w[80%] mt-[10px]'>
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

                  {
                    product1.sizes.map((i,k) => (
                      <div key={k} className={`${size1 ===i? 'bg-rose-500 rounded-md':''}`} >
                        <p className="  h-[36px] w-[34px] flex items-center justify-center text-center rounded-md " onClick={()=>setSize1(i)}>{i}</p>
                      </div>
                    ))
                  }
                </div>
                
                  {/* addd to cart button */}


                <button className='mt-5 bg-black text-white h-[40px] w-[120px] rounded-md pointer' onClick={() => addtocart  (product1._id, size1)}>Add to cart</button>

                <ol className='mt-5 flex flex-col gap-3 list-disc'>
                  <li>100% genuine and authentic.</li>
                  <li>Cash on Delivery (COD) available.</li>
                  <li> Premium quality.</li>
                  <li> Secure purchase. </li>
                </ol>

              </div>

            </div>
            {/* second div */}
            <h3 className='text-center text-gray-500 text-3xl my-[40px] '>You May also like this</h3>


            <div className='flex gap-3 my-[10px]'>
              {
                suggestedProduct.length > 0 ?
                  (suggestedProduct.map((data, index) => <div key={index}>
                    <ProductsDisplay image={data.image[0]} name={data.name} />
                  </div>)) : "<p>Does not find the link for this products</P>"
              }
              {/* <img key={index} src ={data.image[0]} alt={data.name} />
              <p>{data.name}</p> */}
            </div>

          </div> 
          // <h1>hi</h1>
          : <h1>No product found</h1>
      }
    </>

  )
}

export default Product

