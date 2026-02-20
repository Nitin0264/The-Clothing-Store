import React from 'react'

function ProductItem(props) {

  return (
    <div>
      {
       <h1>{props.name} {props.category}</h1>
      }
    </div>
  )
}

export default ProductItem