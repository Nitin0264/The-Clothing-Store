import React, { useContext } from 'react'
import { userContext } from '../context/UserContext'
import { NavLink } from 'react-router-dom';

function Cart() {
  // Destructure the new updateSize function here!
  let { products, cardItem, updateQuantity, removeItem, updateSize } = useContext(userContext)


  let tempdata = [];
  // let totalPrices = 0;
  for (let id in cardItem) {
    for (let size in cardItem[id]) {
      if (cardItem[id][size] > 0) {
        let product = products.find((item) => item._id === id)
        if (product) {
          tempdata.push({
            _id: id,
            size: size,
            quantity: cardItem[id][size],
            ...product
          })
        }
      }
    }
  }

  const subTotal = tempdata.reduce((acc, pro) => acc + pro.price * pro.quantity, 0)

  let shippingFee = subTotal
  if (shippingFee > 300) {
    shippingFee = 0;
  }
  else {
    shippingFee = 10;
  }

  let total = subTotal + shippingFee;

  return (
    <div className="max-w-6xl mx-auto p-5 ">

      <h1 className="text-2xl font-bold mb-6 border-b pb-4">Your Cart</h1>
      <div className='flex gap-5 relative'>

        <div className="flex flex-col gap-6 w-[80%]">
          {tempdata.length > 0 ? (
            tempdata.map((data, index) => (
              <div
                key={`${data._id}-${data.size}`}
                className="flex flex-col sm:flex-row items-center justify-between border p-4 rounded-lg shadow-sm gap-4 bg-white"
              >

                {/* FIRST QUARTER: Small Image & Name */}
                <div className="flex items-center gap-4 w-full sm:w-1/3">
                  <img
                    className="w-20 h-20 object-cover rounded-md border"
                    src={data.image[0]}
                    alt={data.name}
                  />
                  <div className="flex flex-col">
                    <h2 className="text-lg font-semibold text-gray-800">{data.name}</h2>
                    <p className="text-sm text-gray-500">Size: {data.size}</p>
                  </div>
                </div>

                {/* SECOND QUARTER: Size & Quantity Selectors */}
                <div className="flex items-center justify-center gap-4 w-full sm:w-1/3">

                  {/* SIZE SELECTOR */}
                  <div className="flex flex-col items-center">
                    <label className="text-xs text-gray-500 mb-1">Size</label>
                    <select
                      value={data.size}
                      // Trigger updateSize with old size, new size, and current quantity
                      onChange={(e) => updateSize(data._id, data.size, e.target.value, data.quantity)}
                      className="border border-gray-300 rounded-md p-1.5 bg-gray-50 "
                    >
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                    </select>
                  </div>

                  {/* QUANTITY SELECTOR */}
                  <div className="flex flex-col items-center">
                    <label className="text-xs text-gray-500 mb-1">Qty</label>

                    <input value={data.quantity} onChange={(e) => updateQuantity(data._id, data.size, Number(e.target.value))} type="number"
                      className="border border-gray-300 rounded-md p-1.5 bg-gray-50 " />
                  </div>
                </div>

                {/* LAST QUARTER: Total Price & Checkout Actions */}
                <div className="flex flex-col items-end justify-center gap-3 w-full sm:w-1/3 text-right">
                  <div className="flex flex-col">

                    <p className="text-xl font-bold text-gray-900">
                      ${(data.price * data.quantity).toFixed(2)}
                    </p>
                    <p className="text-xs text-green-600">
                      {data.price * data.quantity > 300 ? "Eligible for Free Delivery" : `$${data.price} each`}
                    </p>
                    {/* {
                      totalPrice += (data.price*data.quantity).toFixed(2)
                    } */}
                  </div>

                  <div className="flex gap-2 mt-2">
                    <button
                      // Trigger removeItem
                      onClick={() => removeItem(data._id, data.size)}
                      className="bg-red-100 text-red-600 text-sm font-medium px-4 py-2 rounded-md transition-colors"
                    >
                      Remove
                    </button>
                    {/* <button
                    className="bg-amber-400 text-black text-sm font-medium px-4 py-2 rounded-md transition-colors shadow-sm"
                  >
                    Order Now
                  </button> */}
                  </div>
                </div>

              </div>

            ))
          ) : (
            <div className="text-center text-gray-500 py-10">
              <p className="text-lg">Your cart is currently empty.</p>
            </div>
          )}
          {/* for the total and the checkout and total section order now */}
        </div>

        {/* for the payment section */}
        <div className=' flex h-[400px] w-[20%]  items-center justify-center  fixed start-[77%]'>
          {tempdata.length > 0 ?
            <div className='shadow shadow-lg shadow-yellow-200 p-10' >
              <div className=' flex flex-col gap-3 my-5'>
                <h1 className='text-3xl font-semibold text-center mb-7 border-b border-gray-200 pb-3'>Cart Total</h1>
                <p className='flex justify-between items-center'><span className='text-lg font-semibold'>SubTotal</span><span>{`$${subTotal.toFixed(2)}`}</span></p>

               <p className='flex justify-between items-center  border-b border-gray-200 pb-3'><span className='text-lg font-semibold'>shippingFee</span><span></span>{`$${shippingFee.toFixed(2)}`}</p>

                <p className='flex justify-between items-center'><span className='text-lg font-semibold'>Total</span><span>{`$${total.toFixed(2)}`}</span></p>
              </div>
              <div>
                <NavLink to='/checkout'>
                  <button className='bg-black text-white h-[37px] w-[220px] rounded-md p-2 text-center   cursor-pointer' type="submit">Proceed to checkout</button>
                </NavLink>
              </div>
            </div> : 'Please select the product for the checkout'}


        </div>
      </div>
    </div>
  )
}

export default Cart