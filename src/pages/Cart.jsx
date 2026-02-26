import React, { useContext } from 'react'
import { userContext } from '../context/UserContext'

function Cart() {
  let{products,gettotalCart,addtocart,cardItem} = useContext(userContext)

      let tempdata = [];
      for(let id in cardItem)
      {
        for(let size in cardItem[id])
        {
          if(cardItem[id][size]>0)
          {
             let product = products.find((item)=>item._id ===id)
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
        tempdata.map((data,index)=> <div key={index}>
          {
            <div>
            <h1>{data._id}</h1>
             <img src={data.image} alt={data.name} />
            </div>
          }
          
        </div>)
      }
    </div>
  )
}

export default Cart