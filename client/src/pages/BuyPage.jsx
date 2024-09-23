import React from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../css/BuyPage.css'; // Import the CSS file for styling
const main_server_URL = import.meta.env.VITE_API_MAIN_SERVER_URL;


const BuyPage = () => {
  const location = useLocation();
  const { product, user } = location.state;

  const [street, setStreet] = React.useState('');
  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');
  const [pincode, setPinCode] = React.useState('');
  const [quantity, setQuantity] = React.useState(1);

  let name= localStorage.getItem('person')
  name=JSON.parse(name)
  // console.log(name)


  const proceedPayment=async()=>{
    if(street==='' || city==='' || state==='' || pincode===''){
      alert('Please fill the address details')
      return;
    }
       axios.post(`${main_server_URL}/orders/create-order`,{
           user:user===null ? name.displayName :  user.displayName ,
           quantity:quantity,
           product:product.name,
           Address:street +', '+city+', '+state+', '+pincode
       })
        .then((res)=>{
          // console.log(res)
          alert('Order Placed Successfully')
          // navigator.navigate('/');
        })
        .catch((err)=>{
          console.log(err)
          alert('Something went wrong')
        })

  }

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
        <p>Rs {product.price * quantity}/-</p>
        <p>* This purchase is not refundable </p>
      </div>

      <div  onClick={()=>proceedPayment()}>
      <button className="continue-button">Continue</button>
      </div>
    </div>
  );
}

export default BuyPage;
