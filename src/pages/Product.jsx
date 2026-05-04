import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { userContext } from '../context/UserContext'
import ProductsDisplay from '../components/ProductsDisplay'

function Product() {
  let { pid } = useParams()
  const [image, setImage] = useState(null)
  const [product1, setProduct1] = useState(false)
  const [suggestedProduct, setSuggestedProduct] = useState([])
  const { products } = useContext(userContext)
  const [size1, setSize1] = useState('')
  const { addtocart } = useContext(userContext)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    const product = products.find(p => p._id === pid)
    if (product) {
      setProduct1(product)
      setImage(product.image[0])
    }
  }, [products])

  const handleAddToCart = () => {
    if (!size1) return
    addtocart(product1._id, size1)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <>
      {product1 ? (
        <div>
          <div className='flex gap-4 w-full mx-auto p-6 rounded-md'>

            {/* Left — images */}
            <div className='flex-1'>
              <div className='flex gap-4'>

                {/* Thumbnails */}
                <div className='flex flex-col w-[18%] gap-2'>
                  {product1.image.map((img, index) => (
                    <div
                      key={index}
                      onClick={() => setImage(img)}
                      className={`cursor-pointer rounded-md overflow-hidden border-2 transition-all duration-200 ${
                        image === img
                          ? 'border-black'
                          : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <img className='w-full object-cover' src={img} alt={`view-${index}`} />
                    </div>
                  ))}
                </div>

                {/* Main image */}
                <div className='flex-1 mt-2 rounded-md overflow-hidden'>
                  <img
                    src={image}
                    alt='Product'
                    className='w-full object-cover rounded-md transition-all duration-300'
                  />
                </div>

              </div>
            </div>

            {/* Right — details */}
            <div className='flex flex-col flex-1 gap-3 px-4'>

              <h1 className='text-2xl font-semibold text-gray-900'>{product1.name}</h1>

              {/* Rating */}
              <img
                className='h-[24px] w-[120px]'
                src='https://www.shutterstock.com/image-vector/five-stars-customer-product-rating-260nw-1432771178.jpg'
                alt='rating'
              />

              {/* Price */}
              <p className='text-2xl font-bold text-gray-900'>${product1.price}</p>

              {/* Description */}
              <p className='text-sm text-gray-500 leading-relaxed'>{product1.description}</p>

              {/* Category */}
              <span className='inline-block w-fit text-xs font-medium px-3 py-1 bg-gray-100 text-gray-600 rounded-full'>
                {product1.category}
              </span>

              {/* Size selector */}
              <div className='mt-2'>
                <p className='text-sm font-semibold text-gray-700 mb-2'>Select Size</p>
                <div className='flex gap-2 flex-wrap'>
                  {product1.sizes.map((s, k) => (
                    <button
                      key={k}
                      onClick={() => setSize1(s)}
                      className={`h-[38px] w-[38px] flex items-center justify-center text-sm font-medium rounded-md border transition-all duration-200 cursor-pointer
                        ${size1 === s
                          ? 'bg-black text-white border-black scale-105'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-black hover:bg-gray-100'
                        }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                {!size1 && (
                  <p className='text-xs text-red-400 mt-1'>Please select a size</p>
                )}
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                disabled={!size1}
                className={`mt-3 h-[44px] w-[160px] rounded-md text-sm font-medium tracking-wide transition-all duration-200
                  ${added
                    ? 'bg-green-500 text-white scale-95'
                    : size1
                      ? 'bg-black text-white hover:bg-gray-800 hover:scale-105 active:scale-95'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
              >
                {added ? '✓ Added!' : 'Add to Cart'}
              </button>

              {/* Trust badges */}
              <ul className='mt-4 flex flex-col gap-2 text-sm text-gray-500 list-disc list-inside'>
                <li>100% genuine and authentic.</li>
                <li>Cash on Delivery (COD) available.</li>
                <li>Premium quality.</li>
                <li>Secure purchase.</li>
              </ul>

            </div>
          </div>

          {/* Suggested products */}
          <h3 className='text-center text-gray-400 text-2xl my-10'>You may also like</h3>
          <div className='flex gap-3 my-3 px-6'>
            {suggestedProduct.length > 0
              ? suggestedProduct.map((data, index) => (
                  <div key={index}>
                    <ProductsDisplay image={data.image[0]} name={data.name} />
                  </div>
                ))
              : null}
          </div>
        </div>
      ) : (
        <h1 className='text-center mt-20 text-gray-400'>No product found</h1>
      )}
    </>
  )
}

export default Product