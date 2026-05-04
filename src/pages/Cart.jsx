import React, { useContext, useState } from 'react'
import { userContext } from '../context/UserContext'
import { NavLink } from 'react-router-dom'

function Cart() {
  let { products, cardItem, updateQuantity, removeItem, updateSize } = useContext(userContext)
  const [removingId, setRemovingId] = useState(null)

  let tempdata = []
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
  const shippingFee = subTotal > 300 ? 0 : subTotal === 0 ? 0 : 10
  const total = subTotal + shippingFee

  const handleRemove = (id, size) => {
    setRemovingId(`${id}-${size}`)
    setTimeout(() => {
      removeItem(id, size)
      setRemovingId(null)
    }, 300)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="flex items-baseline justify-between mb-8 border-b border-gray-200 pb-5">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Shopping Cart
          </h1>
          {tempdata.length > 0 && (
            <span className="text-sm text-gray-400">
              {tempdata.length} {tempdata.length === 1 ? 'item' : 'items'}
            </span>
          )}
        </div>

        {tempdata.length === 0 ? (
          /* ── Empty state ── */
          <div className="flex flex-col items-center justify-center py-28 gap-5 text-center">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
            </div>
            <div>
              <p className="text-xl font-semibold text-gray-700">Your cart is empty</p>
              <p className="text-sm text-gray-400 mt-1">Add some items to get started</p>
            </div>
            <NavLink to='/collection'>
              <button className="mt-2 px-7 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                Browse Collection
              </button>
            </NavLink>
          </div>
        ) : (
          <div className="flex gap-8 items-start">

            {/* ── Cart items ── */}
            <div className="flex flex-col gap-4 flex-1">

              {/* Free shipping banner */}
              {subTotal < 300 && (
                <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-sm px-4 py-3 rounded-lg">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                  Spend <strong className="mx-1">${(300 - subTotal).toFixed(2)}</strong> more for free shipping!
                </div>
              )}
              {subTotal >= 300 && (
                <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-lg">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  You've unlocked <strong className="ml-1">free shipping!</strong>
                </div>
              )}

              {tempdata.map((data) => {
                const isRemoving = removingId === `${data._id}-${data.size}`
                return (
                  <div
                    key={`${data._id}-${data.size}`}
                    className={`bg-white border border-gray-200 rounded-xl p-5 flex gap-5 items-center transition-all duration-300 ${isRemoving ? 'opacity-0 scale-95' : 'opacity-100'}`}
                  >
                    {/* Image */}
                    <img
                      className="w-24 h-24 object-cover rounded-lg border border-gray-100 flex-shrink-0"
                      src={data.image[0]}
                      alt={data.name}
                    />

                    {/* Name + size badge */}
                    <div className="flex-1 min-w-0">
                      <h2 className="text-base font-semibold text-gray-900 truncate">{data.name}</h2>
                      <span className="inline-block mt-1 text-xs font-medium px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                        {data.category}
                      </span>

                      {/* Size & Qty — on mobile stacks, on desktop inline */}
                      <div className="flex flex-wrap gap-4 mt-3">

                        {/* Size dropdown */}
                        <div className="flex flex-col gap-1">
                          <label className="text-xs text-gray-400 font-medium">Size</label>
                          <select
                            value={data.size}
                            onChange={(e) => updateSize(data._id, data.size, e.target.value, data.quantity)}
                            className="text-sm border border-gray-200 rounded-md px-2 py-1.5 bg-white text-gray-700 focus:outline-none focus:border-black transition-colors cursor-pointer"
                          >
                            {['S', 'M', 'L', 'XL', 'XXL'].map(s => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>

                        {/* Quantity stepper */}
                        <div className="flex flex-col gap-1">
                          <label className="text-xs text-gray-400 font-medium">Quantity</label>
                          <div className="flex items-center border border-gray-200 rounded-md overflow-hidden">
                            <button
                              onClick={() => updateQuantity(data._id, data.size, Math.max(1, data.quantity - 1))}
                              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors text-lg font-light"
                            >
                              −
                            </button>
                            <span className="w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-800 border-x border-gray-200">
                              {data.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(data._id, data.size, data.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors text-lg font-light"
                            >
                              +
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Price + remove */}
                    <div className="flex flex-col items-end gap-3 flex-shrink-0">
                      <div className="text-right">
                        <p className="text-xl font-bold text-gray-900">${(data.price * data.quantity).toFixed(2)}</p>
                        <p className="text-xs text-gray-400">${data.price} each</p>
                      </div>
                      <button
                        onClick={() => handleRemove(data._id, data.size)}
                        className="flex items-center gap-1.5 text-xs text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-md transition-all"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="3 6 5 6 21 6"/>
                          <path d="M19 6l-1 14H6L5 6"/>
                          <path d="M10 11v6M14 11v6"/>
                        </svg>
                        Remove
                      </button>
                    </div>

                  </div>
                )
              })}
            </div>

            {/* ── Order summary (sticky) ── */}
            <div className="w-[300px] flex-shrink-0 sticky top-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-5">Order Summary</h2>

                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({tempdata.length} items)</span>
                    <span className="font-medium text-gray-900">${subTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className={`font-medium ${shippingFee === 0 ? 'text-green-600' : 'text-gray-900'}`}>
                      {shippingFee === 0 ? 'Free' : `$${shippingFee.toFixed(2)}`}
                    </span>
                  </div>

                  <div className="border-t border-gray-100 pt-3 mt-1 flex justify-between items-center">
                    <span className="font-bold text-gray-900 text-base">Total</span>
                    <span className="font-bold text-gray-900 text-xl">${total.toFixed(2)}</span>
                  </div>
                </div>

                <NavLink to='/checkout'>
                  <button className="mt-6 w-full bg-black text-white py-3 rounded-lg text-sm font-semibold hover:bg-gray-800 active:scale-95 transition-all">
                    Proceed to Checkout →
                  </button>
                </NavLink>

                <NavLink to='/collection'>
                  <button className="mt-3 w-full border border-gray-200 text-gray-600 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                    Continue Shopping
                  </button>
                </NavLink>

                {/* Trust badges */}
                <div className="mt-5 pt-4 border-t border-gray-100 flex flex-col gap-2">
                  {[
                    { icon: '🔒', text: 'Secure checkout' },
                    { icon: '↩️', text: 'Easy 30-day returns' },
                    { icon: '🚚', text: 'Free shipping over $300' },
                  ].map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                      <span style={{ fontSize: 14 }}>{b.icon}</span>
                      {b.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}

export default Cart