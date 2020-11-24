import React from "react";
import { Link } from "react-router-dom";
import './Product.css'

import ContentLoader from "react-content-loader"
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/actions/cartAction";
import utils from "../../utils"





const Product = ({ product }) => {
  const dispatch = useDispatch()
  const onAddToCartClick = (product) => {
    dispatch(addToCart(product))
  }
  
  const isLoading = useSelector(({general}) => general.isLoading)
  if  (isLoading) {
    return (
     <ContentLoader 
    speed={2}
    width={230}
    height={405}
    viewBox="0 0 230 405"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="31" cy="31" r="15" /> 
    <rect x="58" y="18" rx="2" ry="2" width="140" height="10" /> 
    <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> 
    <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
  </ContentLoader>) }
  return (
   <article>
      <Link to={"/product/" + product.id}><img src={product.image} alt="" /></Link>
      <h3><Link to={"/product/" + product.id}>{product.title}</Link></h3>
      <h4><Link to={"/product/" + product.id}>{utils.formatCurrency(product.price)}</Link></h4>
      <span onClick={() => {onAddToCartClick(product)}} className="btn-add">
        Add to cart
      </span>
    </article>
  )
  

  
};

export default Product;
