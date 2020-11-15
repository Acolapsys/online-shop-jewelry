import React from "react";
import { Route } from "react-router-dom";
import getProducts from "./api/api";
import "./App.css";

import { Header, Footer, Nav, Breadcrumbs } from "./components";
import { LastProducts, QuickLinks, Cart } from "./pages";
import ProductFull from "./pages/ProductFull/ProductFull";
import ProductsContainer from "./pages/Products/ProductsContainer";

const navItems = [
  "New collection",
  "necklaces",
  "earrings",
  "Rings",
  "Gift cards",
  "Promotions",
];
const onChangeCategory = (category) => {
  console.log(category);
};

function App() {
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
          <Route path='/products' component={ProductsContainer} />
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
