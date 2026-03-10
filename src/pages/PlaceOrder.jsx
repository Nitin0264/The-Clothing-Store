import React from 'react'

function PlaceOrder() {
  return (
    <div className='flex justify-center items-center h-[100vh] w-[100%] bg-gray-50 rounded-md'>
      <div className='flex gap-3 justify-start items-center mt-6 mx-auto'>
        <div className='flex1 flex flex-col gap-3  '>
          <div className='flex gap-4 '>
            <input className='h-[35px] w-[300px] border-2 border-black' type="text" name="" placeholder='name' />
            <input className='h-[35px] w-[300px] border-2 border-black' type="text" name="" placeholder=' last name' />

          </div>
          <input className='h-[35px] w-[615px] border-2 border-black' type="email" name="" placeholder=' E-mail' />

          <div className='flex gap-4 '>

            <input className='h-[35px] w-[300px] border-2 border-black' type="text" name="" placeholder='  city' />
            <input className='h-[35px] w-[300px] border-2 border-black' type="text" name="" placeholder='  state' />

          </div>

          <div className='flex gap-4 '>

            <input className='h-[35px] w-[300px] border-2 border-black' type="number" name="" placeholder='  zip' />
            <input className='h-[35px] w-[300px] border-2 border-black' type="text" name="" placeholder='  country' />

          </div>
          <input className='h-[35px] w-[615px] border-2 border-black' type="number" name="" placeholder='  Mobile Number' />
        </div>
        <div className='flex1 flex border flex-col border-amber-950 p-10'>
          <h1>cart total ------------</h1>

          <div className='flex flex-col gap-4'>
            <p>subtotal</p>
            <p>shipping fee</p>
            <p>total</p>

          </div>
          <p>Payment Method</p>
          <div className='flex gap-5'>
            <p className='border rounded-md p-2 my-4 text-blue-600 cursor-pointer'>Rozerpay</p>
            <p className='border rounded-md p-2 my-4 text-blue-600 cursor-pointer'>stripe</p>
            <p className='border rounded-md p-2 my-4 text-blue-600 cursor-pointer'>cash on delivery</p>
          </div>
          <div>
            <button className='rounded-md text-white bg-black p-3  flex justify-end items-end cursor-pointer'>place order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder