import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {CartItem} from "../../components";
import { changeQuantityCartItem, deleteCartItem } from "../../store/actions/cartAction";
import utils from '../../utils'



const Cart = () => {
  const dispatch = useDispatch()
  const {cart, fullCartPrice} = useSelector(({cartPage}) => ({
    cart: cartPage.cart,
    fullCartPrice: cartPage.fullCartPrice
  }))
  const [shipment, setShipment] = useState(fullCartPrice <= 3000 ? 100 : 0)

  const onDeleteCartItem = (productId) => {
    dispatch(deleteCartItem(productId))
    
  }
  const onChangeQuantityCartItem = (data) => {
    dispatch(changeQuantityCartItem(data))
    console.log(cart);
  }
  useEffect(() => {
    setShipment(fullCartPrice <= 3000 ? 100 : 0)

  }, [fullCartPrice])
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
               changeQuantityCartItem={onChangeQuantityCartItem}
             />
            ))}
          </tbody>
        </table>
      </div>

      <div className="total-count">
            <h4>Subtotal: {utils.formatCurrency(fullCartPrice)}</h4>
            <p>+shippment: {utils.formatCurrency(shipment)}</p>
        <h3>
            Total to pay: <strong>{utils.formatCurrency(fullCartPrice + shipment)}</strong>
        </h3>
        <a href="/" className="btn-grey">
          Finalize and pay
        </a>
      </div>
    </div>
  );
};

export default Cart;
