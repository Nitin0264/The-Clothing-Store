import React, { useContext } from 'react'
import { userContext } from '../context/UserContext'

function Cart() {
  let { products, gettotalCart, addtocart, cardItem } = useContext(userContext)

  let tempdata = [];
  for (let id in cardItem) {
    for (let size in cardItem[id]) {
      if (cardItem[id][size] > 0) {
        let product = products.find((item) => item._id === id)
        tempdata.push({
          _id: id,
          size: size,
          quantity: cardItem[id][size],
          ...product
        })
      }
    }
  }
  return (
    <div>
      {
        tempdata.map((data, index) => data ?
          (<div className='flex flex-col gap-[30px] ' key={index}>
            <br />
            {
              <div>
                <div className='w-[100%] items-center  flex gap-[8px]justify-between'>

                  {/* image section */}
                  <div className='w-[30%]'>
                    <img className='' src={data.image[0]} alt={data.name} />
                  </div>
                  {/* description section */}

                  <div className='flex flex-col items-center justify-center gap-5 text-center w-[40%] mx-3'>
                    <p className='text-lg text-center '>
                      {data.description}</p>
                    <p className='text-xl'>${data.price}</p>
                    <hr />

                  </div>
                  {/* the below div is for the data about the project */}
                  <div className='flex flex-col'>
                    <div className='flex flex-col gap-4  w-[100%] mx-5'>
                      <p className='text-2xl'>${data.price}</p>
                      <p className='text-md'>Free delivery on product Price over $50</p>
                      <h1>{data.name}</h1>
                      {/* <p>{data.size}</p> */}
                    </div>
                    {/* for the order button checkbox and the dropdown for the size */}
                    <div className='flex flex-col gap-3'>

                      {/* for the size and quantity */}
                      <div className='flex gap-[20px] items-center justify-evenly my-[20px]'>
                        <select>
                          <option value="">S</option>
                          <option value="">M</option>
                          <option value="">Xl</option>
                          <option value="">XXL</option>
                        </select>

                        <select name="" id="">
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                        </select>
                      </div>
                      <div className='flex gap-5'>

                        <button className='bg-amber-300 h-[28px] w-[120px] rounded-md'>Remove Item</button>
                        <button className='bg-amber-300 h-[28px] w-[120px] rounded-md'>Order Now</button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            }

          </div>) : "sorry this data is not present")
      }
    </div>
  )
}

export default Cart