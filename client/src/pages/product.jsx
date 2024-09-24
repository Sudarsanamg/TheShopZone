import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header/navbar';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import '../css/Product.css'

const main_server_URL = import.meta.env.VITE_API_MAIN_SERVER_URL;

const Product = () => {
  const location = useLocation();
  const { product } = location.state;
  const navigate = useNavigate();
  
  const user = JSON.parse(localStorage.getItem('user'));

  const handleAddToCart = async () => {
    await axios.post(`${main_server_URL}/products/addToCart`, {
      user: user,
      product: product
    })
    .then(() => alert('Product added successfully to cart'))
    .catch((err) => alert(err));
  };

  const handleBuy = () => {
    navigate('/buy', { state: { product: product, user: user } });
  };

  return (
    <div className="product-detail-container">
      <Header props={user} />
      <p className="product-name">{product.name}</p>
      <img className="product-image" src={product.image} alt={product.name} />
      <p className="product-price">₹{product.price}</p>
      <p className="product-description">{product.description}</p>
      <Rating name="read-only" value={product.rating} readOnly />
      <p>* Product will be delivered with in 7 - 10 days (only in TamilNadu and kerala)</p>
      <div className="button-container">
        <button className="buy-button" onClick={handleBuy}>Buy Now</button>
        <button className="cart-button" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
