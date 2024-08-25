import React from 'react'
import Shoptop from '../components/top/Shoptop'
import Popular from '../components/popular/popular'
import Header from '../components/Header/navbar'
import { useLocation } from 'react-router-dom'

const Shop = () => {
  const location = useLocation();
  const { user } = location.state;
  return (
    <>
    <Header props={user} />
    <Shoptop />
    <Popular/>
    </>
    
  )
}

export default Shop