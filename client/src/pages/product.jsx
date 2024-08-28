import React from 'react'
import { useLocation } from 'react-router-dom';

const product = () => {
    const location = useLocation();
    const {product}= location.state;


  return (
    <div>
        <p>{product.name}</p>
        <img src={product.image} alt="" />
        <p>{product.price}</p>
        <button>Buy Now </button>
        <button>Add to Cart</button>
    </div>
  )
}

export default product