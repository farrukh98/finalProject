import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment, removeFromCart } from "../../redux/modules/cart/cartAction";
import {Container, Customers, Table, TableWrapper} from "./style";

function Customer() {
    const cart=useSelector((state)=>state.cart);
    const dispatch=useDispatch();

    const sellProducts = () => {
      const purchaseData = cart?.map(({ id, choosen }) => ({
        amount: choosen,
        productId: id,
      }));
      console.log(purchaseData);
  
      axios
        .post(
          "https://store-management-backend-app.herokuapp.com/api/v1/sale/sold",
          purchaseData
        )
        .then((res) => {
          console.log("success", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return(
        <>
           <Container>
               <h1>Your Product Cart</h1>
               <TableWrapper>
                   <Table>
                   <tr>
            <th>No</th>
            <th>Name</th>
            <th>Image</th>
            {/* <th>Amount</th> */}
            <th>Price</th>
            <th>Action</th>
            <th>Delete</th>
            </tr>
            
            {cart
            .map(({ id, productName, price,  chosen,imageId }, index) => (
            <tr key={id}>
              <td>{index + 1}</td>
              <td>{productName}</td>
              <td> <img
                  src={`https:store-management-backend-app.herokuapp.com/api/v1/attachment/${imageId}`}
                  alt=""
                />{" "}</td>
              <td>{price} $</td>
              <td>
                <button className="plus"
                //   disabled={amount <= chosen}
                  onClick={() => dispatch(increment(index))}
                >
                  +
                </button>{" "}
                {chosen}{" "}
                <button  className="minus"
                  disabled={chosen <= 1}
                  onClick={() => dispatch(decrement(index))}
                >
                  -
                </button>
              </td>
              <td>
                <button className="delete" onClick={() => dispatch(removeFromCart(index))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
          
                   </Table>
                   <div className="part2">
            {/* <td>{cart.length}</td> */}
            <br /><br />
            <h1 className="Totals"> Total Amount:  {cart.reduce((t, v ) => t + v.chosen, 0)}</h1>
           
            <h1 className="Totals"> Total price:  {cart.reduce((t, v) => t + v.chosen * v.price, 0)}$</h1>
            
            
          
          <button className="clean" onClick={()=>dispatch({type:"CLEAN"})}>Clean</button>
          <button className="Checkout" onClick={sellProducts}>Check Out</button>
          </div>
               </TableWrapper>
           </Container>
        </>
    )

}
export default Customer