import React from "react";
import { Link, useLocation} from "react-router-dom";

const titleList = {
  "cart": "Cart",
  "product": "Product page",
  "products": "Products results",
  "blog": "Blog",
  "account": "Account"
  
};

const Breadcrumbs = () => {

  const location = useLocation();
  const curRoute = location.pathname.split("/")[1]
  
  console.log( location, "curr=", location.pathname.split("/")[1]);

  return ( location.pathname !== '/' &&
    <div id="breadcrumbs">
      <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>{titleList[curRoute]}</li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumbs;
