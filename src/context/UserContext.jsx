import React, { createContext } from 'react'
import { products } from '../assets/frontend_assets/assets'

export let userContext = createContext()
function Provider({children}) {
let name = 'Nitin'
const obj = {
  products,name
}
  return (
    <userContext.Provider value ={obj}>
         {children}
    </userContext.Provider>
  )
}

export default Provider