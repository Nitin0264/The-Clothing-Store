import React, { useContext } from 'react'
import { userContext } from '../context/UserContext'

function PlaceOrder() {
  let { products, cardItem } = useContext(userContext);

  const getCartTotal = () => {
    let totalAmount = 0;

    for (const itemId in cardItem) {

      const itemInfo = products.find((p) => p._id === itemId);

      if (!itemInfo) continue;

      for (const size in cardItem[itemId]) {
        try {
          if (cardItem[itemId][size] > 0) {
            totalAmount += itemInfo.price * cardItem[itemId][size];
          }
        } catch (error) {
          console.error("Error calculating:", error);
        }
      }
    }
    return totalAmount;
  };

  const subTotal = getCartTotal();
  const shippingFee = subTotal > 300 || subTotal === 0 ? 0 : 10;
  const total = subTotal + shippingFee;

  return (
    <div className='flex flex-col items-center justify-center min-h-screen w-full bg-gray-50 p-4'>
      <h2 className='mb-10 text-3xl font-medium'>Delivery Information</h2>

      <div className='flex flex-col lg:flex-row gap-10 items-start justify-center w-full max-w-6xl'>

        {/* Left Side: Form */}
        <div className='flex flex-col gap-4 w-full lg:w-3/5'>
          <div className='flex gap-4'>
            <input className='h-10 flex-1 border border-gray-300 rounded px-3' type="text" placeholder='First Name' />
            <input className='h-10 flex-1 border border-gray-300 rounded px-3' type="text" placeholder='Last Name' />
          </div>
          <input className='h-10 w-full border border-gray-300 rounded px-3' type="email" placeholder='Email Address' />
          <div className='flex gap-4'>
            <input className='h-10 flex-1 border border-gray-300 rounded px-3' type="text" placeholder='City' />
            <input className='h-10 flex-1 border border-gray-300 rounded px-3' type="text" placeholder='State' />
          </div>
          <div className='flex gap-4'>
            <input className='h-10 flex-1 border border-gray-300 rounded px-3' type="number" placeholder='Zip Code' />
            <input className='h-10 flex-1 border border-gray-300 rounded px-3' type="text" placeholder='Country' />
          </div>
          <input className='h-10 w-full border border-gray-300 rounded px-3' type="number" placeholder='Mobile Number' />
        </div>

        {/* Right Side: Cart Totals */}
        <div className='w-full lg:w-2/5 border border-gray-200 p-8 bg-white rounded-lg shadow-sm'>
          <h1 className='text-2xl font-bold mb-6 border-b pb-2'>Cart Total</h1>

          {products.length > 0 ? (
            <div className='flex flex-col gap-3 mb-8'>
              <p className='flex justify-between'>
                <span className='text-gray-600'>Subtotal</span>
                <span className='font-semibold'>${subTotal.toFixed(2)}</span>
              </p>
              <p className='flex justify-between border-b pb-3'>
                <span className='text-gray-600'>Shipping Fee</span>
                <span className='font-semibold'>${shippingFee.toFixed(2)}</span>
              </p>
              <p className='flex justify-between pt-2'>
                <span className='text-xl font-bold'>Total</span>
                <span className='text-xl font-bold'>${total.toFixed(2)}</span>
              </p>
            </div>
          ) : (
            <p className='text-red-500 mb-8'>Your cart is empty.</p>
          )}


          <p className='font-medium mb-4 uppercase text-sm text-gray-500'>Payment Method</p>
          <div className='flex flex-wrap gap-3 mb-8'>
            {/* creating 3 button at once */}
            {['Razorpay', 'Stripe', 'Cash on Delivery'].map((method) => (
              <button key={method} className='border rounded px-4 py-2 hover:bg-gray-50 text-sm transition-colors'>
                {method}
              </button>
            ))}
          </div>

          <button className='w-full bg-black text-white py-3 rounded-md font-bold hover:bg-gray-800 transition-colors uppercase tracking-wider'>
            Place Order
          </button>
        </div>

      </div>
    </div>
  )
}

export default PlaceOrder