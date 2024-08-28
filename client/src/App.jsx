import React from 'react';
import './App.css'

import { BrowserRouter as Router, Routes,Route,  } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
// import Home from './pages/Home';
// import Header from "./components/Header/navbar";
import Shop from "./pages/shop";
// import Product from "./pages/product";
import Cart from "./pages/cart";
import ProductList from './pages/ProductList';
import Product from './pages/Product';
// import Shop_category from "./pages/shop_category";
// import Login_page from "./pages/login_page";


function App() {
 

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Shop />} />
           <Route path="/login" Component={Login} exact />
          <Route path="/signup" Component={SignUp} />
          {/* <Route path="/shop" element={<Shop />} />        */}
          <Route path='/cart' Component={Cart} />
          <Route path='/productList' Component={ProductList} />
          <Route path='/product' Component={Product}/>


         </Routes>
      </Router>

      
    </>
  )
}

export default App
