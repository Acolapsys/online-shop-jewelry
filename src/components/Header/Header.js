import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
    return <header id="header">
    <div className="container">
        <Link to="/" id="logo" title="Diana’s jewelry">Diana’s jewelry</Link>
        <div className="right-links">
            <ul>
                <li><NavLink to="/cart"><span className="ico-products"></span>3 products, $4 500.00</NavLink></li>
                <li><NavLink to="/account"><span className="ico-account"></span>Account</NavLink></li>
                <li><NavLink to="/signout"><span className="ico-signout"></span>Sign out</NavLink></li>
            </ul>
        </div>
    </div>
    
</header>
}

export default Header