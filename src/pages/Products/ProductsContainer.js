import Products from "./Products";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Axios from "axios";


const ProductsContainer = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    
    Axios
        .get("http://localhost:3000/db.json")
        .then((res) => {
          setIsLoading(false);
          setProducts(res.data.products)
        })
        .catch((error) => {
          setError(error.message);
          console.log(error);
          setIsLoading(false);
        });
      
  }, []);
  return   <Products products={products} isLoading={isLoading} />;
};



export default ProductsContainer
