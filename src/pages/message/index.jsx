import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getHistoryAction } from "../../redux/modules/history/getHistory";
import { Card, Messages } from "./style";
import {Button, Spinner} from "react-bootstrap"


function Message() {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.history);

  useEffect(() => {
    dispatch(getHistoryAction());
  }, []);

  const { loading, success, error } = history;

  return (
    <>
      <Messages>
        <h1>Products Histories</h1>
        <div className="Loading" animation="border"> 
          {loading && "Loading Pls Wait A While..."}
        {error && "Error Pls Try Again Later"} </div>
       
        {/* {success && "Success"} */}
        
<div className="container22">
        {history?.data?.map(({ id, createdAt, productList }, index) => (
        <Card key={id}>
          
          {productList.map(
            ({ amount, id, product: {  productName, category, price } }) => (
              <div>
                <p><img srcset="https://img.icons8.com/external-photo3ideastudio-flat-photo3ideastudio/2x/external-shopping-cart-supermarket-photo3ideastudio-flat-photo3ideastudio.png 2x" alt="Shopping Cart icon" loading="lazy"/></p>
                <p><b>ID: </b>{index+1}</p>
                  <h3>Product Name:  <span>{productName}</span>
                    </h3>
                  <h3>Product Price:  <span>${price}</span> 
                    </h3>
                    <h3>
                    Product Amount:   <span>{amount}</span>
                    </h3>
                    <h3>Total amount: <span>${amount*price}</span></h3>
                    <h2>Thank you for your purchase</h2>
                  
              </div>
            )
          )}
          
        </Card>
      ))}
      </div>
      </Messages>
    
    </>
  );
}
export default Message;
