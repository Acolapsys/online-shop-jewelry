import React from "react";
import { Link } from "react-router-dom";

const CartItem = ({ imageLink, title, desc, price, quantity }) => {
  const totalPrice = price * quantity;
  return (
    <tr>
      <td className="items">
        <div className="image">
          <img src={imageLink} alt="" />
        </div>
        <h3>
          <Link to='/products'>{title}</Link>
        </h3>
        <p>{desc}</p>
      </td>
      <td className="price">{price}</td>
      <td className="qnt">
        <span className="crf-s hided-s" id="crf-s-0">
          <select className="hided-s" style={{ display: "none" }}>
            <option>1</option>
            <option>2</option>
          </select>
          <span className="option">{quantity}</span>
        </span>
      </td>
      <td className="total">{totalPrice}</td>
      <td className="delete">
        <Link to="#" className="ico-del"></Link>
      </td>
    </tr>
  );
};

export default CartItem;
