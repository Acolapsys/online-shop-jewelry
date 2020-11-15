import React, { useEffect, useState } from "react";
import { Product, Pagination, Sidebar } from "../../components";


const Products = ({products, isLoading}) => {


  return (
    <div id="body">
      <div className="container">
        <Pagination />
        <div className="products-wrap">
          <Sidebar />
          <div id="content">
            <section className="products">
              {products.map((product) => {
                return ( isLoading ? 'Loading' :
                  <Product
                    key={product.id}
                    productImage={product.image}
                    productTitle={product.title}
                    productPrice={product.price}
                    productLink="/product"
                    productId={product.id}
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
  );
};

export default Products;
