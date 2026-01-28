import React from 'react'

export default function ProductCard({image, name, price, onAddToCart}) {
  return (
    <div>
    <img src={image} />
    <p>{price}</p>
    <button></button>
    </div>
    
  )
}
