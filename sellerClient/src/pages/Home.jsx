import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const location = useLocation();
    const user=location.state.user;
    const userMail=user.email;
    const navigate = useNavigate();


    const routeAddProduct =()=>{
      navigate('/addProduct')
    }

  return (
    
    <div>
      <button onClick={routeAddProduct}>AddProduct</button>
      {user.displayName}

      
      </div>
  )
}

export default Home