import React from "react";
import NavHeader from "../navHeader";
import { Mainpages } from "./style";
import DashBoard from "../dashboard";
import Product from "../product";
import { Route, Routes } from "react-router-dom";
import Customer from "../customer";
import Message from "../message";

function MainPage() {
  return (
    <>
      <Mainpages>
        <input type="text" placeholder="Search Product" />
        <img className='search' href='#' src="https://img.icons8.com/ios-glyphs/30/000000/search.png"/>
        <NavHeader />
        <Routes>
          <Route path="/dashboard"  element={<DashBoard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </Mainpages>
    </>
  );
}

export default MainPage;
