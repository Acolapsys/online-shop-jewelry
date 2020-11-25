import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {CartItem} from "../../components";
import { deleteCartItem } from "../../store/actions/cartAction";



const Cart = () => {
  const dispatch = useDispatch()
  const {cart} = useSelector(({cartPage}) => ({
    cart: cartPage.cart
  }))

  const onDeleteCartItem = (productId) => {
    dispatch(deleteCartItem(productId))
  }
  return (
    <div id="content" className="full">
      <div className="cart-table">
        <table>
          <tbody>
            <tr>
              <th className="items">Items</th>
              <th className="price">Price</th>
              <th className="qnt">Quantity</th>
              <th className="total">Total</th>
              <th className="delete"></th>
            </tr>
            {cart.map(item => (
               <CartItem
               key={item.id}
               product={item}
               deleteCartItem={onDeleteCartItem}
             />
            ))}
          </tbody>
        </table>
      </div>

      <div className="total-count">
        <h4>Subtotal: $4 500.00</h4>
        <p>+shippment: $30.00</p>
        <h3>
          Total to pay: <strong>$4 530.00</strong>
        </h3>
        <a href="/" className="btn-grey">
          Finalize and pay
        </a>
      </div>
    </div>
  );
};

export default Cart;
