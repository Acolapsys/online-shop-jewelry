import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import utils from "../../utils";

const Header = () => {
  const { cart, fullCartPrice } = useSelector(({ cartPage }) => ({
    cart: cartPage.cart,
    fullCartPrice: cartPage.fullCartPrice,
  }));

  return (
    <header id="header">
      <div className="container">
        <Link to="/" id="logo" title="Diana’s jewelry">
          Diana’s jewelry
        </Link>
        <div className="right-links">
          <ul>
            <li>
              <NavLink to="/cart">
                <span className="ico-products"></span>
                {!Object.keys(cart).length
                  ? "Empty cart"
                  : `${
                      Object.keys(cart).length
                    } products, ${utils.formatCurrency(fullCartPrice)}`}
              </NavLink>
            </li>
            <li>
              <NavLink to="/account">
                <span className="ico-account"></span>Account
              </NavLink>
            </li>
            <li>
              <NavLink to="/signout">
                <span className="ico-signout"></span>Sign out
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
