
import React, { useEffect, useState} from "react";
import { connect, useDispatch, useSelector  } from "react-redux";
import Axios from "axios";


import { Product, Pagination, Sidebar } from "../../components";
import { setProducts } from "../../store/actions/productsAction";
import { setError, setIsLoading } from "../../store/actions/generalAction";

const Products = () => {
  const dispatch = useDispatch()
  const {isLoading, isError, products} = useSelector(({productsPage, general}) => {
    return {
      isLoading: general.isLoading,
      isError: general.isError,
      products: productsPage.products
    }
  })
  useEffect(() => {
    dispatch(setIsLoading(true));
    
    Axios
        .get("http://localhost:3000/db.json")
        .then((res) => {
          dispatch(setIsLoading(false));
          dispatch(setProducts(res.data.products));
          console.log(res.data.products)
        })
        .catch((error) => {
          dispatch(setError(error.message));
          dispatch(setIsLoading(false));
        });
      
  },[])

  return       <div id="body">
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
