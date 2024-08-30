import React from 'react'
import { useLocation } from 'react-router-dom';
//
const Product = () => {
    const location = useLocation();
    const {product}= location.state;
    
    const {user} =location.state;

    console.log("user"+ user);
//  hbfdcndin

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

export default Product