import React, { createContext, useEffect, useState } from 'react'
import { products } from '../assets/frontend_assets/assets'

export let userContext = createContext()
function Provider({ children }) {
  let [cardItem, setCardItem] = useState({})
  let name = 'Nitin'

  let addtocart = (id, size) => {
    let cardData = structuredClone(cardItem)
    if (cardData[id]) {
      if (cardData[id][size]) {
        cardData[id][size] += 1
      } else {

        cardData[id][size] = 1
      }
    } else {

      cardData[id] = {}
      cardData[id][size] = 1
    }
    setCardItem(cardData)
  }

  const gettotalCart = () => {
    let totalCount = 0

    for (let items in cardItem) {
      for (let size in cardItem[items]) {
        if (cardItem[items][size]) {
          totalCount += cardItem[items][size]
        }
      }
    }
    return totalCount

  }


  
  
  // 1. Update Quantity
const updateQuantity = (itemId, size, quantity) => {
  // Create a deep copy of the cart object so we don't mutate state directly
  let cartData = structuredClone(cardItem);
  
  if (quantity === 0) {
    delete cartData[itemId][size];
  } else {
    cartData[itemId][size] = quantity;
  }
  
  setCardItem(cartData);
};

// 2. Remove Item completely
const removeItem = (itemId, size) => {
  let cartData = structuredClone(cardItem);
  delete cartData[itemId][size];
  setCardItem(cartData);
};

// 3. Update Size (This removes the old size and adds the new one)
const updateSize = (itemId, oldSize, newSize, quantity) => {
  let cartData = structuredClone(cardItem);
  
  // Remove the old size
  delete cartData[itemId][oldSize];
  
  // If the user already has this new size in the cart, add to it. Otherwise, set it.
  if (cartData[itemId][newSize]) {
    cartData[itemId][newSize] += quantity;
  } else {
    cartData[itemId][newSize] = quantity;
  }
  
  setCardItem(cartData);
};

// Make sure to export them in your Provider!
// <userContext.Provider value={{ ..., updateQuantity, removeItem, updateSize }}>
const obj = {
  products, name, addtocart, gettotalCart, cardItem, updateQuantity, removeItem, updateSize
}
useEffect(() => {
  console.log(cardItem)
}, [cardItem])

  return (
    <userContext.Provider value={obj}>
      {children}
    </userContext.Provider>
  )
}

export default Provider