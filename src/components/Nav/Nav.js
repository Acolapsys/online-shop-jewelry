import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";




const Nav = ({ categoriesList, onChangeCategory }) => {

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
          {categoriesList.map((item) => {
            return (
              <li
                className={activeItem === item.id ? 'active' : ''}
                key={`${item.type}_${item.id}`}
                onClick={() => onSelectItem(item.id)}
                
              >
                <NavLink to="/products">{item.type}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
