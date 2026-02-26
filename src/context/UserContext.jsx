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


  const obj = {
    products, name, addtocart, gettotalCart, cardItem
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