import Header from "./components/Header/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop";
import Product from "./pages/product";
import Cart from "./pages/cart";
import Shop_category from "./pages/shop_category";
import Login_page from "./pages/login_page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<Shop_category category="mens" />} />
          <Route path="/womens" element={<Shop_category category="womens" />} />
          <Route path="/kids" element={<Shop_category category="kids" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productid" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login_page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
