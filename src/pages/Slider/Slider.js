import React from 'react'
import { Link } from 'react-router-dom'
import './Slider.css'




const Slider = () => {
    return <div id="slider">
    <ul>
        <li style={{backgroundImage: "url(images/0.jpg)"}}>
            <h3>Make your life better</h3>
            <h2>Genuine diamonds</h2>
            <Link href="#" className="btn-more">Read more</Link>
        </li>
        <li className="purple" style={{backgroundImage: "url(images/01.jpg)"}}>
            <h3>She will say “yes”</h3>
            <h2>engagement ring</h2>
            <Link href="#" className="btn-more">Read more</Link>
        </li>
        <li className="yellow" style={{backgroundImage: "url(images/02.jpg)"}}>
            <h3>You deserve to be beauty</h3>
            <h2>golden bracelets</h2>
            <Link href="#" className="btn-more">Read more</Link>
        </li>
    </ul>
</div>
}

export default Slider