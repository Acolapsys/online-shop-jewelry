
import React, { useEffect, useState } from "react";
import {useDispatch, useSelector  } from "react-redux";

import { Product, Pagination, Sidebar } from "../../components";
import { fetchProducts } from "../../store/actions/productsAction";

const Products = () => {
  const dispatch = useDispatch()

  const {category, products, productsPerPage, sortBy, currentPage} = useSelector(({productsPage, filters}) => {
    return {      
      category: filters.category,
      products: productsPage.products,
      productsPerPage: filters.productsPerPage,
      sortBy: filters.sortBy,
      currentPage: filters.currentPage
    }
  })

  useEffect(() => {
    dispatch(fetchProducts(category, productsPerPage, currentPage, sortBy))
  }, [category, productsPerPage, sortBy, currentPage])

  

 
  return       <div id="body">
  <div className="container">
    <Pagination />
    <div className="products-wrap">
      <Sidebar productsPerPage={productsPerPage} />
      <div id="content">
        <section className="products">
          {products
          .map((product) => {
            return ( 
              <Product
                key={product.id}
                product={product}
              />
            );
          })}
        </section>
      </div>
      {/*-- / content --> /<*/}
    </div>
    <Pagination />
  </div>
  {/*<!-- / container -->*/}
</div>
};


export default Products

