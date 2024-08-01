import React from 'react'
import { useLocation } from 'react-router-dom';


const Home = () => {
    const location = useLocation();
    const user=location.state.user;
    const userMail=user.email;
  return (
    <div>{user.displayName}</div>
  )
}

export default Home