import React, { useState, useEffect } from "react";
import { Products } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getPRoductAction } from "../../redux/modules/product/getProductAction";
import { removeFromCart } from "../../redux/modules/cart/cartAction";
import Modal from "./Modals/modals";
import { addToCart } from "../../redux/modules/cart/cartAction";

function Product() {
  const [showModal, setShowModal] = useState(false);

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const product = useSelector((state) => state.getProduct);

  useEffect(() => {
    dispatch(getPRoductAction());
  }, []);

  const { loading, success, error, data } = product;

  return (
    <>
      <Products>
        <div className="Loading" animation="border">
          {loading && "Loading Pls Wait A While..."}
          {error && "Error Pls Try Again Later"}{" "}
        </div>
        <div className="btn-group">
          <p className="title">Products</p>
        </div>
        <div className="cart-img">
          <button onClick={() => setShowModal(true)}>
            AddProduct{" "}
            <img src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart--v1.png" />
          </button>
        </div>

        <ul className="navs">
          <li>
            <a href="#">All Product</a>
          </li>
          <li>
            <a href="#">Completed</a>
          </li>
          <li>
            <a href="#">Panding</a>
          </li>
          <li>
            <a href="#">Cancel</a>
          </li>
        </ul>
        <table className="table">
          <tr>
            <th style={{ width: "fit-content" }}>No</th>
            <th>Poduct Name</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Price</th>
            <th>Add to Cart</th>
            <th>Delete</th>
            {/* <th>Status</th> */}
          </tr>

          {data
            .filter((v, i) => !cart.some((val) => val.id === v.id))
            .map(
              (
                { id, productName, price, imageId, description, amount },
                index
              ) => (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={`https:store-management-backend-app.herokuapp.com/api/v1/attachment/${imageId}`}
                      alt=""
                    />{" "}
                    <span>{productName}</span>
                  </td>
                  <td>{description}</td>
                  <td>{amount}</td>
                  <td>${price}</td>
                  <td>
                    {" "}
                    <a
                      href="#"
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id,
                            productName,
                            price,
                            imageId,
                            chosen: 1,
                          })
                        )
                      }
                    >
                      <img src="https://img.icons8.com/ios-glyphs/30/000000/shopping-cart--v1.png" />
                    </a>
                  </td>
                  <td>
                    <a href="#" onClick={() => dispatch(removeFromCart(index))}>
                      <img
                        srcset="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/452/external-delete-multimedia-kiranshastry-gradient-kiranshastry.png 2x"
                        alt="Delete icon in Kiranshastry Gradient"
                        loading="lazy"
                      />
                    </a>
                  </td>
                </tr>
              )
            )}

          <div className="hr"></div>
        </table>

        {showModal && <Modal closeModal={setShowModal} />}
      </Products>
    </>
  );
}
export default Product;





