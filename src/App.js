
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import "./App.css";

import { Header, Footer, Nav, Breadcrumbs } from "./components";
import { LastProducts, QuickLinks, Cart } from "./pages";
import ProductFull from "./pages/ProductFull/ProductFull";
import Products from "./pages/Products/Products";
import {setCategory} from "./store/actions/filterAction"
import { fetchCategories } from "./store/actions/generalAction";
import { fetchProducts } from "./store/actions/productsAction";






function App() {
  const dispatch = useDispatch();
  
  const categoriesList = useSelector(({general}) => general.categoriesList)
  const category = useSelector(({filters}) => filters.category)
  
  useEffect(() => {
    dispatch(fetchCategories())
    
    dispatch(fetchProducts())      
  },[category])
  const onChangeCategory = (category) => {
    dispatch(setCategory(category))
  };
  
  return (
    <div className="App">
      <Header />
      <Nav categoriesList={categoriesList} onChangeCategory={onChangeCategory} />
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
