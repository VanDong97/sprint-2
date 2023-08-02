import './App.css';
import React from "react";
import {Header} from "./component/Home/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./component/Home/Footer";
import {Login} from "./component/Login/Login";
import {Home} from "./component/Home/Home";
import {ProductDetail} from "./component/ProductDetail/ProductDetail";
import {ShoppingCart} from "./component/ShoppingCart/ShoppingCart";

function App() {
  return (
      <>
          <Header />
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/product-detail" element={<ProductDetail />} />
              <Route path="/shopping-cart" element={<ShoppingCart />} />
          </Routes>
          <Footer />
        </>
  );

}
export default App;
