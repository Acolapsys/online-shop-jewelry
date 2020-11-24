import React from "react";
import { Link, useLocation, useParams, useRouteMatch } from "react-router-dom";

const titleList = {
  "/cart": "Cart",
  "/product": "Product page",
  "/products": "Products results",
  "/blog": "Blog",
  "/account": "Account"
  
};

const Breadcrumbs = () => {

  const location = useLocation();
  const curRoute = location.pathname.match(/^\/\w+/)
  console.log( location, "curr=", curRoute);

  return ( location.pathnme !== '/' &&
    <div id="breadcrumbs">
      <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>{titleList[location.pathname]}</li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumbs;
