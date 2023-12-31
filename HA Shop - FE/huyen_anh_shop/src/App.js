import './App.css';
import React from "react";
import {Header} from "./component/Home/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./component/Home/Footer";
import {Login} from "./component/Login/Login";
import {Home} from "./component/Home/Home";
import {ProductDetail} from "./component/ProductDetail/ProductDetail";
import {ShoppingCart} from "./component/ShoppingCart/ShoppingCart";
import {QuantityProvider} from "./component/ShoppingCart/QuantityContext";
import {Shop} from "./component/ShoppingCart/Shop";
import {Employee} from "./component/Home/employee";
import {History} from "./component/ShoppingCart/History";
import {Promotion} from "./component/Home/Promotion";

function App() {
  return (
      <>
          <QuantityProvider>
          <Header />
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/detail/:id" element={<ProductDetail />} />
              <Route path="/v2/cart/:username" element={<ShoppingCart />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/employee' element={<Employee />} />
              <Route path='/history' element={<History />} />
              <Route path='/promotion' element={<Promotion />} />
          </Routes>
          <Footer />
          </QuantityProvider>
        </>
  );

}
export default App;
