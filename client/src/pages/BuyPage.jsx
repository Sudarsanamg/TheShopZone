import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/BuyPage.css'; // Import the CSS file for styling

const BuyPage = () => {
  const location = useLocation();
  const { product, user } = location.state;

  const [street, setStreet] = React.useState('');
  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');
  const [pincode, setPinCode] = React.useState('');
  const [quantity, setQuantity] = React.useState(1);

  return (
    <div className="buy-page-container">
      <h2 className="page-title">Delivery Details</h2>
      
      <div className="address-container">
        <h3>Delivery Address</h3>
        <input 
          type="text" 
          placeholder="Street" 
          value={street} 
          onChange={(e) => setStreet(e.target.value)}
          className="input-field"
        />
        <input 
          type="text" 
          placeholder="City" 
          value={city} 
          onChange={(e) => setCity(e.target.value)}
          className="input-field"
        />
        <input 
          type="text" 
          placeholder="State" 
          value={state} 
          onChange={(e) => setState(e.target.value)}
          className="input-field"
        />
        <input 
          type="text" 
          placeholder="Pincode" 
          value={pincode} 
          onChange={(e) => setPinCode(e.target.value)}
          className="input-field"
        />
         <img src={product.image} alt="" />

      </div>
   
      <div className="quantity-container">
        <h3>Quantity</h3>
        <div className="quantity-controls">
          <button 
            className="quantity-button" 
            onClick={() => { if (quantity > 1) setQuantity(quantity - 1); }}
          >
            -
          </button>
          <span className="quantity-display">{quantity}</span>
          <button 
            className="quantity-button" 
            onClick={() => { if (quantity < 5) setQuantity(quantity + 1); }}
          >
            +
          </button>
        </div>
      </div>

      <div className="total-price">
        <h3>Total Price</h3>
        <p>${product.price * quantity}</p>
      </div>

      <button className="continue-button">Continue</button>
    </div>
  );
}

export default BuyPage;
