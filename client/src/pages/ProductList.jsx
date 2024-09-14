import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import Header from '../components/Header/navbar';
import '../css/ProductList.css'

const main_server_URL = import.meta.env.VITE_API_MAIN_SERVER_URL;

const ProductList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { productQuery } = location.state || {};
  const user = JSON.parse(localStorage.getItem('user'));

  const [productJson, setProductJson] = React.useState([]);
  const [filter, setFilter] = React.useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${main_server_URL}/products/searchProductAll`, { params: { search: `${productQuery}` } });
        setProductJson(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [productQuery]);

  React.useEffect(() => {
    if (filter === 'option1') {
      const sorted = [...productJson].sort((a, b) => a.price - b.price);
      setProductJson(sorted);
    } else if (filter === 'option2') {
      const sorted = [...productJson].sort((a, b) => b.price - a.price);
      setProductJson(sorted);
    }
  }, [filter]);

  const handleRouteToProduct = (item) => {
    navigate('/product', { state: { product: item } });
  };

  return (
    <div>
      <Header props={user} />
    <div className="product-list-container">

      <label htmlFor="dropdown">Choose an option:</label>
      <select id="dropdown" value={filter} onChange={handleChange}>
        <option value="">Select...</option>
        <option value="option1">Price Low to High</option>
        <option value="option2">Price High to Low</option>
      </select>

      <div className="product-list-grid">
        {productJson.length > 0 && productJson.map((item, index) => (
          <div key={index} className="product-item" onClick={() => handleRouteToProduct(item)}>
            <img src={item.image} alt="" />
            <p>{item.name}</p>
            <p>{item.description}</p>
            <h4>{item.price}</h4>
            <Rating name="read-only" value={item.rating} readOnly />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProductList;
