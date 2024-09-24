import React, { useEffect } from 'react';
import Shoptop from '../components/top/Shoptop';
import Popular from '../components/popular/popular';
import Header from '../components/Header/navbar';
import { useLocation, useNavigate } from 'react-router-dom';

const Shop = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let {user} = location.state? location.state : {displayName:""};
  // const accessToken = localStorage.getItem('accessToken');
  // console.log(user)
  let person=localStorage.getItem('person');
  user=person;

  
  useEffect(() => {

    // console.log('User:', user);
    // console.log('Access Token:', accessToken);

    if ( !user) {
      console.log('Redirecting to login...');
      navigate('/login');
    }
  }, []);

  // If navigating away, return null to prevent rendering
  // console.log('User outer:', user);
  //   console.log('Access Token outer :', accessToken);
  if (!user) {
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