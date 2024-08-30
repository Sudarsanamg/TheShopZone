import React, { useEffect } from 'react';
import Shoptop from '../components/top/Shoptop';
import Popular from '../components/popular/popular';
import Header from '../components/Header/navbar';
import { useLocation, useNavigate } from 'react-router-dom';

const Shop = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;
  const accessToken = localStorage.getItem('accessToken');


  useEffect(() => {

    console.log('User:', user);
    console.log('Access Token:', accessToken);

    if (!accessToken || !user) {
      console.log('Redirecting to login...');
      navigate('/login');
    }
  }, []);

  // If navigating away, return null to prevent rendering
  console.log('User outer:', user);
    console.log('Access Token outer :', accessToken);
  if (!localStorage.getItem('accessToken') || !user) {
    return null;
  }

  return (
    <>
      <Header props={user} />
      <Shoptop />
      <Popular />
    </>
  );
};

export default Shop;