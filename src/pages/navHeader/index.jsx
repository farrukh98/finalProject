import React, { useState } from "react";
import { Link,useLocation } from "react-router-dom";
import { Li, Navheader } from "./style";

function NavHeader() {
  const {pathname} =useLocation();

  

  
  
  return (
    <>
      <Navheader>
        <p className="logo">E-Commerce</p>
        <ul>
         
            <Li active={pathname==="/dashboard"}>
            <Link to="/dashboard">
              <img
                src="https://img.icons8.com/material-outlined/24/000000/medium-icons.png"
                alt=""
              />{" "}
              <span>Dashboard</span>{" "}
            </Link>
            </Li>
          
          <Li active={pathname==="/product"}>
            <Link to="/product">
              <img srcset="https://img.icons8.com/external-wanicon-lineal-color-wanicon/2x/external-product-influencer-marketing-wanicon-lineal-color-wanicon.png 2x" alt="Product icon" loading="lazy"></img>{" "}
              <span> Products</span>
            </Link>
            </Li>
         
          <Li active={pathname==="/customer"}>
            <Link to="/customer">
            <img
                src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png"
                alt=""
              />{" "}
              <span>Cart</span>
            </Link>
            </Li>
         
          <Li active={pathname==="/message"}>
            <Link to="/message">
            <img alt="History icon" srcset="https://img.icons8.com/external-becris-lineal-color-becris/2x/external-history-literary-genres-becris-lineal-color-becris.png 2x"/>
              <span>History</span>
            </Link>{" "}

           
            
</Li>
          
            {/* <a href="#">
              <img
                src="https://img.icons8.com/glyph-neue/128/000000/settings.png"
                alt=""
              />{" "}
              <span> Settings</span>
            </a> */}
          
        </ul>
      </Navheader>
    </>
  );
}

export default NavHeader;
