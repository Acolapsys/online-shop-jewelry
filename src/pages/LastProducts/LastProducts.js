import React from 'react'
import {Product} from '../../components'
import './LastProducts.css'




const LastProducts = () => {
    return 	<div className="last-products">
    <h2>Last added products</h2>
    <section className="products">

        <Product productImage="./images/1.jpg" productTitle="Silver ring" productPrice="$1 850.00" productLink="/product" />
        <Product productImage="./images/11.jpg" productTitle="Silver necklace" productPrice="$1 250.00" productLink="/product"/>
        <Product productImage="./images/12.jpg" productTitle="Silver bracelet" productPrice="$850.00" productLink="/product"/>
        <Product productImage="./images/13.jpg" productTitle="Golden ring" productPrice="$950.00" productLink="/product"/>
        <Product productImage="./images/14.jpg" productTitle="Platinum earings" productPrice="$2 850.00" productLink="/product"/>
       
    </section>
</div>

}

export default LastProducts