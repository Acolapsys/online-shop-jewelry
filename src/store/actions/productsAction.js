import Axios from "axios";
import { useSelector } from "react-redux";
import { setError, setIsLoading } from "./generalAction";

const SET_PRODUCTS = "SET_PRODUCTS"



export const fetchProducts = (category, productsPerPage, currentPage, sortBy) => (dispatch) => {
    dispatch(setIsLoading(true));
    Axios
        .get(`http://localhost:3001/products?_page=${currentPage}${category ? `&categories=${category}` : ''}&_limit=${productsPerPage}&_sort=${sortBy.toLowerCase()}`)
        .then(({data}) => {
          
          dispatch(setProducts(data));
          dispatch(setIsLoading(false));
        })
        .catch((error) => {
          dispatch(setError(error.message));
          dispatch(setIsLoading(false));
        });
}

export const fetchLastProducts = () => (dispatch) => {
  dispatch(setIsLoading(true));
  Axios
      .get('http://localhost:3001/products?_sort=id&_order=desc&_limit=5')
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