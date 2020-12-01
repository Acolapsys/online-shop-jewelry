import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../components";
import { fetchLastProducts } from "../../store/actions/productsAction";
import "./LastProducts.css";


const LastProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLastProducts())      
  },[])
  const { products } = useSelector(({ productsPage }) => {
    return {
      products: productsPage.products,
    };
  });

  return (
    <div className="last-products">
      <h2>Last added products</h2>
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
  );
};

export default LastProducts;
