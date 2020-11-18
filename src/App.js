import Axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import getProducts from "./api/api";
import "./App.css";

import { Header, Footer, Nav, Breadcrumbs } from "./components";
import { LastProducts, QuickLinks, Cart } from "./pages";
import ProductFull from "./pages/ProductFull/ProductFull";
import Products from "./pages/Products/Products";
import {setCategory} from "./store/actions/filterAction"
import { setError, setIsLoading } from "./store/actions/generalAction";
import { setProducts } from "./store/actions/productsAction";

const navItems = [
  "New collection",
  "necklaces",
  "earrings",
  "Rings",
  "Gift cards",
  "Promotions",
];



function App() {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsLoading(true));
    
    Axios
        .get("http://localhost:3001/products")
        .then((res) => {
          dispatch(setIsLoading(false));
          dispatch(setProducts(res.data));
        })
        .catch((error) => {
          dispatch(setError(error.message));
          dispatch(setIsLoading(false));
        });
      
  },[])
  const onChangeCategory = (category) => {
    dispatch(setCategory(category))
    console.log("cat=", category);
  };
  
  getProducts()
  return (
    <div className="App">
      <Header />

      <Nav navItems={navItems} onChangeCategory={onChangeCategory} />
      <Breadcrumbs />

      {/* <Slider /> */}

      <div id="body">
        <div className="container">
          <Route path="/" exact>
            <LastProducts />
            <QuickLinks />
          </Route>
          <Route path='/products' component={Products} />
          <Route path='/cart' component={Cart} />
          <Route path='/product/:id' component={ProductFull} />
        </div>
      </div>

      <Footer />

      {/* <script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
	<script>window.jQuery || document.write("<script src='js/jquery-1.11.1.min.js'>\x3C/script>")</script>
	<script src="js/plugins.js"></script>
	<script src="js/main.js"></script> */}
    </div>
  );
}

export default App;
