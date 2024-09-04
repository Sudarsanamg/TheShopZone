import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'; // Import the 'navigate' function
import Header from '../components/Header/navbar';
import axios from 'axios';
const main_server_URL = import.meta.env.VITE_API_MAIN_SERVER_URL;

//
const Product = () => {
    const location = useLocation();
    const {product}= location.state;
    const navigate = useNavigate();
    
    const user=JSON.parse(localStorage.getItem('user'));

    // console.log("user"+ JSON.stringify(user));


    const handleAddToCart=async()=>{
      //checking if the product is already exists in cart
      
      // console.log(user)
      await axios.post(`${main_server_URL}/products/addToCart`,{
        user:user,
        product:product
      }).then((res)=>alert('Product added successfully in cart')).catch((err)=>alert(err));
      
    }


    const handleBuy=async()=>{
      navigate('/buy',{state:{product:product,user:user}});
    }
//  hbfdcndin

  return (
    <div>
      <Header props={user}/>
        <p>{product.name}</p>
        <img src={product.image} alt="" />
        <p>{product.price}</p>
        <button onClick={handleBuy}>Buy Now </button>
        <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  )
}

export default Product