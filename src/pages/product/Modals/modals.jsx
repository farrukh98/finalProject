import React from "react";

import "./modal.css";

function Modal({ closeModal }) {
 
 
 
 

  return (
    <div className="modal-popup">
      <form className="modal-show" >
        <button className="closeBtn" onClick={() => closeModal(false)}>
          X
        </button>
        <div className="logo-div">
          <p className="logo">Create a new product</p>
          <ul className="about">
            <li style={{ listStyle: "none" }}>Dashboard</li>
            <li>E-Commerse</li>
            <li style={{ color: "darkblue" }}>New Product</li>
          </ul>
        </div>
        <div className="container">
          <div className="container2">
            <input
              style={{ width: "80%", margin: " 20px 0px 0px 20px" }}
              type="text"
              name="name"
              placeholder="Product Name"
              
            />{" "}
            <br />
            <p className="titlee">Description</p>
            <textarea
              name="description"
              placeholder="Write something awesome..."
              cols="30"
              rows="10"
            ></textarea>{" "}
            <br />
            <p className="titlee">Add Images</p>
            <input  className="files" type="file" id="" />
          </div>
          <div className="container3">
            <div className="inputs2">
              <input
                name="amount"
                type="number"
                className="amount"
                placeholder="Product Amount"
              />
              <input
                name="price"
                type="text"
                placeholder="Product Price"
                className="amount"
                
              />
              <input name="data" type="text" placeholder="Date" className="amount" /> <br />
              <button className="submit">Create Product</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Modal;
