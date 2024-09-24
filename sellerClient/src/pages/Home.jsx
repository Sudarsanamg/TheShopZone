import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOutFromGoogle } from '../firebaseconfig.js';
import axios from 'axios';

const main_server_URL = import.meta.env.VITE_API_MAIN_SERVER_URL;

const Home = () => {
  const [user, setUser] = React.useState('');
  const navigate = useNavigate();
  const [products, setProducts] = React.useState([]);
  const accessToken = localStorage.getItem('accessToken');
  const [orders,setOrders]=React.useState([]);

  const routeAddProduct = () => {
    navigate('/addProduct');
  };

  const routeHandleMyProducts = () => {
    navigate('/myProducts');
  };

  const SignOut = async () => {
    try {
      await signOutFromGoogle();
      localStorage.removeItem('accessToken');
      navigate('/');
    } catch (error) {
      localStorage.removeItem('accessToken');
      navigate('/');
    }
  };

  React.useEffect(() => {
    if (accessToken == null) {
      navigate('/');
      return;
    }

    const getProducts = async () => {
      try {
        const response = await axios.post(
          `${main_server_URL}/products/getProduct`,
          { email: user.email },
          // {
          //   headers: {
          //     Authorization: `Bearer ${accessToken}`,
          //   },
          // }
        );
        setUser(response.data.user);
        setProducts(response.data.user.products);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, [ navigate, user.email]);




  return (
    <div>
      <button onClick={routeAddProduct}>Add Product</button>
      <button onClick={SignOut}>Sign Out</button>
      <p>{user.name}</p>
      <button onClick={routeHandleMyProducts}>My Products</button>
      <div>
        <p>Orders</p>
        <div>
          {orders.length>1 ? orders.map((doc,index)=>(
            <p key={index}>{doc.name}</p>
          )) :"No orders"}
        </div>
      </div>
    </div>
  );
};

export default Home;