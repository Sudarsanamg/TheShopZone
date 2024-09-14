import React, { useState } from 'react';
import logo_image from '../assets/logo.png';
import cart_image from '../assets/cart_icon.png';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import Search from '../Search/Search';

const Header = (param) => {
  const [menu, setMenu] = useState('shop');
  let user = localStorage.getItem('person');
  user = JSON.parse(user);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('person');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/login');
  };

  return (
    <>
      <div className="nav">
        <div className="nav-logo">
          <img className="logo" src={logo_image} alt="logo" onClick={() => navigate('/')} />
          <h1 className="brand"><span className="D">D</span> Mart</h1>
        </div>
        <Search />
        <ul className="menu">
          <li onClick={() => setMenu('shop')}>
            <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
            {menu === 'shop' && <hr />}
          </li>
          <li onClick={() => setMenu('mens')}>
            <Link style={{ textDecoration: 'none' }} to='/mens'>Mens</Link>
            {menu === 'mens' && <hr />}
          </li>
          <li onClick={() => setMenu('womens')}>
            <Link style={{ textDecoration: 'none' }} to='/womens'>Womens</Link>
            {menu === 'womens' && <hr />}
          </li>
          <li onClick={() => setMenu('kids')}>
            <Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>
            {menu === 'kids' && <hr />}
          </li>
        </ul>
        <div>
          <p>{user.displayName ? `Hello ${user.displayName}!` : 'Login please..'}</p>
        </div>
        <div>
          <img src={user.photoURL} style={{ maxHeight: 60, maxWidth: 60, borderRadius: 15 }} alt="user" />
        </div>
        <div className="nav-login">
          <button className="login" onClick={handleLogout}>Logout</button>
          <Link to='/cart'>
            <img className="cart" src={cart_image} alt="cart" />
          </Link>
          <div className="nav-cart-count">5+</div>
        </div>
      </div>
    </>
  );
};

export default Header;
