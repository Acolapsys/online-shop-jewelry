import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = ({ navItems, onChangeCategory }) => {




  const onSelectItem = (index) => {
    setActiveItem(index)
    onChangeCategory(index)
  }
  const [activeItem, setActiveItem] = useState("");
  return (
    <nav id="menu">
      <div className="container">
        <div className="trigger"></div>
        <ul>
          {navItems.map((item, index) => {
            return (
              <li
                className={activeItem === index ? 'active' : ''}
                key={`${item}_${index}`}
                onClick={() => onSelectItem(index)}
                
              >
                <NavLink to="/products">{item}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
