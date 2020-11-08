import React from "react";
import "./App.css";


import {Header, Nav, LastProducts, QuickLinks, Footer} from "./components";

const navItems = ['New collection', 'necklaces', 'earrings', 'Rings', 'Gift cards', 'Promotions']
const onChangeCategory = (category) => {
  console.log(category)
}

function App() {
  return (
    <div className="App">
      <Header />

      <Nav navItems={navItems} onChangeCategory={onChangeCategory}/>

      {/* <Slider /> */}

      <div id="body">
        <div className="container">
          <LastProducts />
          <QuickLinks />
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
