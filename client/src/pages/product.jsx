import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../components/Header/navbar';
//
const Product = () => {
    const location = useLocation();
    const {product}= location.state;
    
    const user=JSON.parse(localStorage.getItem('user'));

    // console.log("user"+ user);
//  hbfdcndin

  return (
    <div>
      <Header props={user}/>
        <p>{product.name}</p>
        <img src={product.image} alt="" />
        <p>{product.price}</p>
        <button>Buy Now </button>
        <button>Add to Cart</button>
    </div>
  )
}

export default Product