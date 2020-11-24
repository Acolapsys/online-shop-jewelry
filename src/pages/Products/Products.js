
import React from "react";
import {useSelector  } from "react-redux";

import { Product, Pagination, Sidebar } from "../../components";

const Products = () => {

  const {category, products, productsPerPage} = useSelector(({productsPage, filters}) => {
    return {      
      category: filters.category,
      products: productsPage.products,
      productsPerPage: filters.productsPerPage
    }
  })

 
  return       <div id="body">
  <div className="container">
    <Pagination />
    <div className="products-wrap">
      <Sidebar productsPerPage={productsPerPage} />
      <div id="content">
        <section className="products">
          {products
          .filter((item) => category ? item.categories[0] === category : item)
          .slice(0, productsPerPage)
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

