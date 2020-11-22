import Axios from "axios";
import { setError, setIsLoading } from "./generalAction";

const SET_PRODUCTS = "SET_PRODUCTS"



export const fetchProducts = () => (dispatch) => {
    
    
    dispatch(setIsLoading(true));
    Axios
        .get("http://localhost:3001/products")
        .then(({data}) => {
          
          dispatch(setProducts(data));
          dispatch(setIsLoading(false));
        })
        .catch((error) => {
          dispatch(setError(error.message));
          dispatch(setIsLoading(false));
        });
}

export const setProducts = (products) => {
    return {type: SET_PRODUCTS, products}
}