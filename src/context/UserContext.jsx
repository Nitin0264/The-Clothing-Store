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

  // for the update part
  const updateQuantity = (itemId, size, quantity) => {
    let cartData = structuredClone(cardItem);

    if (quantity === 0) {
      delete cartData[itemId][size];
    }
    else {
      cartData[itemId][size] = quantity;
    }
    setCardItem(cartData);
  }


  // for the deletion part

  const removeItem = (itemId, size) => {
    let cartData = structuredClone(cardItem)

    delete cartData[itemId][size];
    setCardItem(cartData);
  }

  // for  the size updauiton part

  const updateSize =  (itemId,oldSize,newSize,quantity) =>
  {
    let cartData  = structuredClone(cardItem);

    delete cartData[itemId][oldSize];

    if(cartData[itemId][newSize]){
      cartData[itemId][newSize] += quantity;
    }
    else{
      cartData[itemId][newSize] = quantity;
    }
    setCardItem(cartData);

  }

  // const totalPrice = ()=>
  // {
  //   let totalAmount = 0;
  //   for (const itemId in cardItem)
  //   {
  //     const itemInfo = products.find((product)=> product._id  === itemId);
  //     console.log(itemInfo)
  //     if(!itemInfo) continue  // skip if product not found

  //        for (const size in cardItem[itemId])
  //        {
  //         console.log(size)
  //        }
  //        totalAmount += itemInfo.price * cardItem[itemId][size]
  //        console.log(totalAmount)
  //   }
  //   return totalAmount;
  // }

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