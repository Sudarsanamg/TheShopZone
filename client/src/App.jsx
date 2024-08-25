import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes,Route,  } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
// import Home from './pages/Home';
// import Header from "./components/Header/navbar";
import Shop from "./pages/shop";
// import Product from "./pages/product";
// import Cart from "./pages/cart";
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
          <Route path="/shop" element={<Shop />} />       
         </Routes>
      </Router>

      
    </>
  )
}

export default App
