import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  return (
    <div id="breadcrumbs">
      <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Product results</li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumbs;
