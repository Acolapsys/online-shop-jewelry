import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import utils from '../../utils'

import './CartItem.css'



const CartItem = ({product, deleteCartItem, changeQuantityCartItem }) => {
  const dispatch = useDispatch()
  

  const onDeleteClick = (productId) => {
    console.log("deleteId=", productId);
    deleteCartItem(productId)


  }
  const {price, quantity, image, title, id, description} = {...product}
  const totalPrice = price * quantity;
  const onChangeQuantity = (e) => {
    changeQuantityCartItem({id, quantity: e.target.value})


  }
  return (
    <tr>
      <td className="items">
        <div className="image">
        <Link to={`/products/${id}`}>
          <img src={image} style={{width: "112px", height: "112px"}} alt="" />
          </Link>
        </div>
        <h3>
          <Link to={`/products/${id}`}>{title}</Link>
        </h3>
        <p>{description}</p>
      </td>
      <td className="price">{utils.formatCurrency(price)}</td>
      <td className="qnt">
        <span className="crf-s" id="crf-s-0">
          <input type="number" className="option" value={quantity} onChange={onChangeQuantity}/>
        </span>
      </td>
      <td className="total">{utils.formatCurrency(totalPrice)}</td>
      <td className="delete">
        <span style={{cursor: "pointer"}} onClick={() => onDeleteClick(id)} className="ico-del"></span>
      </td>
    </tr>
  );
};

export default CartItem;
