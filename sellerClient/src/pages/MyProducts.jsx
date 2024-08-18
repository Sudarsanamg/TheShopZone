import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/AddProduct.css';  // Import the CSS file

const MyProducts = () => {

  const navigate = useNavigate();
  const [products, setProducts] = React.useState([]);
  const accessToken = localStorage.getItem('accessToken');

  React.useEffect(() => {
    const getProducts = async () => {
      try {
        await axios.post('http://localhost:3004/authenticateJWT',{
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          }
        }).then((response) => { setProducts(response.data.user.products); })
          .catch((error) => console.log(error));
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();

  }, []);

  return (
    <div className="container">
      <button className="back-button" onClick={() => { navigate('/home') }}>Back</button>
      <ul className="products-list">
        {products.map((item, index) => (
          <li className="product-item" key={index}>
            <span className="product-name">{item.name}</span>
            <div className="action-buttons">
              <button className="edit-button">Edit</button>
              <button className="delete-button">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MyProducts;
