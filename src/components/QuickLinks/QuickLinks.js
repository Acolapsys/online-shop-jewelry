import React from 'react'
import './QuickLinks.css'



const QuickLinks = () => {
    return 	<section className="quick-links">
    <article style={{ backgroundImage: "url(images/2.jpg)" }}>
      <a href="/" className="table">
        <div className="cell">
          <div className="text">
            <h4>Lorem ipsum</h4>
            <hr />
            <h3>Dolor sit amet</h3>
          </div>
        </div>
      </a>
    </article>
    <article
      className="red"
      style={{ backgroundImage: "url(./images/3.jpg)" }}
    >
      <a href="/" className="table">
        <div className="cell">
          <div className="text">
            <h4>consequatur</h4>
            <hr />
            <h3>voluptatem</h3>
            <hr />
            <p>Accusantium</p>
          </div>
        </div>
      </a>
    </article>
    <article style={{ backgroundImage: "url(./images/4.jpg)" }}>
      <a href="/" className="table">
        <div className="cell">
          <div className="text">
            <h4>culpa qui officia</h4>
            <hr />
            <h3>magnam aliquam</h3>
          </div>
        </div>
      </a>
    </article>
  </section>


}

export default QuickLinks