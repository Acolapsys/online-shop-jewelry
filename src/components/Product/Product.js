import React from "react";
import { Link } from "react-router-dom";
import './Product.css'







const Product = ({ productImage, productTitle, productPrice, productId }) => {
  return (
    <article>
      <Link to={"/product/" + productId}><img src={productImage} alt="" /></Link>
      <h3><Link to={"/product/" + productId}>{productTitle}</Link></h3>
      <h4><Link to={"/product/" + productId}>{productPrice}</Link></h4>
      <Link to="/cart" className="btn-add">
        Add to cart
      </Link>
    </article>
  );
};

export default Product;
