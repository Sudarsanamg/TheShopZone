import axios from 'axios';
import React from 'react';
import '../css/Cart.css'; // Import the CSS file for styling
const main_server_URL = import.meta.env.VITE_API_MAIN_SERVER_URL;

const Cart = () => {
  const userId = localStorage.getItem("UserId");
  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      await axios.post(`${main_server_URL}/products/getMyCart`, {
        userId: userId
      })
      .then((res) => setCart(res.data.cart))
      .catch((err) => alert(err));
    };

    fetchData();
  }, [userId]);

  return (
    <div className="cart-container">
      <h2 className="cart-title">My Cart</h2>

      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <p className="item-name">{item.name}</p>
            <button className="delete-button">Delete</button>
          </div>
        ))
      ) : (
        <p className="empty-cart">Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
