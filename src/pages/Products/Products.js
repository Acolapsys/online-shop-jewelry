
import React, { useEffect, useState} from "react";
import { connect, useDispatch, useSelector  } from "react-redux";
import Axios from "axios";


import { Product, Pagination, Sidebar } from "../../components";
import { setProducts } from "../../store/actions/productsAction";
import { setError, setIsLoading } from "../../store/actions/generalAction";

const Products = () => {

  const {isLoading,  products, productsPerPage} = useSelector(({productsPage, general, filters}) => {
    return {      
      isLoading: general.isLoading,
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
          {products.map((product) => {
            return ( isLoading ? 'Loading' :
              <Product
                key={product.id}
                productImage={product.image}
                productTitle={product.title}
                productPrice={product.price}
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
};


export default Products

// const mapStateToProps = (state) => {
//   return {
//     products: productsPage.products,
//     isLoading: general.isLoading,
//     error: general.error
//   }
// }
// export default connect(mapStateToProps, {
//   setProducts, setIsLoading, setError
// })(Products)
