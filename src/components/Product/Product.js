import React from "react";
import { Link } from "react-router-dom";
import './Product.css'







const Product = ({ productImage, productTitle, productPrice, productLink }) => {
  return (
    <article>
      <Link to={productLink}><img src={productImage} alt="" /></Link>
      <h3><Link to={productLink}>{productTitle}</Link></h3>
      <h4><Link to={productLink}>{productPrice}</Link></h4>
      <Link to="/cart" className="btn-add">
        Add to cart
      </Link>
    </article>
  );
};

export default Product;
