import React from 'react'





const Footer = () => {
    return <footer id="footer">
    <div className="container">
      <div className="cols">
        <div className="col">
          <h3>Frequently Asked Questions</h3>
          <ul>
            <li>
              <a href="/">Fusce eget dolor adipiscing </a>
            </li>
            <li>
              <a href="/">Posuere nisl eu venenatis gravida</a>
            </li>
            <li>
              <a href="/">Morbi dictum ligula mattis</a>
            </li>
            <li>
              <a href="/">Etiam diam vel dolor luctus dapibus</a>
            </li>
            <li>
              <a href="/">Vestibulum ultrices magna </a>
            </li>
          </ul>
        </div>
        <div className="col media">
          <h3>Social media</h3>
          <ul className="social">
            <li>
              <a href="/">
                <span className="ico ico-fb"></span>Facebook
              </a>
            </li>
            <li>
              <a href="/">
                <span className="ico ico-tw"></span>Twitter
              </a>
            </li>
            <li>
              <a href="/">
                <span className="ico ico-gp"></span>Google+
              </a>
            </li>
            <li>
              <a href="/">
                <span className="ico ico-pi"></span>Pinterest
              </a>
            </li>
          </ul>
        </div>
        <div className="col contact">
          <h3>Contact us</h3>
          <p>
            Diana’s Jewelry INC.
            <br />
            54233 Avenue Street
            <br />
            New York
          </p>
          <p>
            <span className="ico ico-em"></span>
            <a href="/">contact@dianasjewelry.com</a>
          </p>
          <p>
            <span className="ico ico-ph"></span>(590) 423 446 924
          </p>
        </div>
        <div className="col newsletter">
          <h3>Join our newsletter</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus sit voluptatem
            accusantium doloremque laudantium.
          </p>
          <form action="#">
            <input type="text" placeholder="Your email address..." />
            <button type="submit" />
          </form>
        </div>
      </div>
      <p className="copy">Copyright 2013 Jewelry. All rights reserved.</p>
    </div>
  </footer>
}

export default Footer