import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css'


const Nav = ({navItems, onChangeCategory}) => {
  return (
    <nav id="menu">
      <div className="container">
        <div className="trigger"></div>
        <ul>

            {navItems.map((item, index) => {
              return <li key={`${item}_${index}`} onClick={() => onChangeCategory(item)}>
              <NavLink activeClassName="active" to="/products">{item}</NavLink>
            </li>
            })
            }
           
         
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
