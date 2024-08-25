import React from 'react'
import logo_image from '../assets/logo.png'
import cart_image from '../assets/cart_icon.png'
import { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Header = () =>{
const [menu,setMenu] = useState("shop");

  return (
    <>
    <div className="nav">
    <div className="nav-logo">
      <img className='logo' src={logo_image} alt="logo" />
        <h1 className='brand'><span className='D'>D</span> Mart</h1>
    </div>
      <ul className='menu'>
          <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{(menu==="shop")?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Mens</Link>{(menu==="mens")?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Womens</Link>{(menu==="womens")?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{(menu==="kids")?<hr/>:<></>}</li>
        </ul>
    
    <div className="nav-login">
      <button className='login'><Link style={{textDecoration:'none'}} to='/login'>Login</Link></button>
      <Link to='/cart'><img className='cart' src={cart_image} alt="cart" /></Link>
      <div className="nav-cart-count">
        0
      </div>
    </div>
      </div>
    </>
    
  )
}

export default Header