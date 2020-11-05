import React from 'react'
import { Link } from 'react-router-dom'
import './LastProducts.css'




const LastProducts = () => {
    return 	<div className="last-products">
    <h2>Last added products</h2>
    <section className="products">
        <article>
            <img src="./images/1.jpg" alt="" />
            <h3>Excepteur sint occaecat</h3>
            <h4>$1 850.00</h4>
            <Link to="/cart" className="btn-add">Add to cart</Link>
        </article>
        <article>
            <img src="./images/11.jpg" alt="" />
            <h3>Lorem ipsum dolor</h3>
            <h4>$990.00</h4>
            <Link to="/cart" className="btn-add">Add to cart</Link>
        </article>
        <article>
            <img src="./images/12.jpg" alt="" />
            <h3>cupidatat non proident</h3>
            <h4>$1 200.00</h4>
            <Link to="/cart" className="btn-add">Add to cart</Link>
        </article>
        <article>
            <img src="./images/13.jpg" alt="" />
            <h3>Duis aute irure</h3>
            <h4>$2 650.00</h4>
            <Link to="/cart" className="btn-add">Add to cart</Link>
        </article>
        <article>
            <img src="./images/14.jpg" alt="" />
            <h3>magna aliqua</h3>
            <h4>$3 500.00</h4>
            <Link to="/cart" className="btn-add">Add to cart</Link>
        </article>
    </section>
</div>

}

export default LastProducts