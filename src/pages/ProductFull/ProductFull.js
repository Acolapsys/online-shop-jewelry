import React, { useEffect, useState } from "react";
import Axios from "axios";





const ProductFull = (props) => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const productId =  props.match.params.id

useEffect(() => {
    setIsLoading(true)
    
    Axios
        .get("http://localhost:3000/db.json")
        .then((res) => {
          setIsLoading(false);
          setProducts(res.data.products[productId])
        })
        .catch((error) => {
          setError(error.message);
          console.log(error);
          setIsLoading(false);
        });

}, [])

  return (
    <div className="product">
      <div className="image">
        <img src="../images/5.jpg" alt="" />
      </div>
      <div className="details">
  <h1>{products.title}</h1>
  <h4>{products.price}</h4>
        <div className="entry">
          <p>
            {products.description}
          </p>
          <div className="tabs">
            <div className="nav">
              <ul>
                <li className="active">
                  <a href="#desc">Description</a>
                </li>
                <li>
                  <a href="/">Specification</a>
                </li>
                <li>
                  <a href="/">Returns</a>
                </li>
              </ul>
            </div>
            <div className="tab-content active" id="desc">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>
            </div>
            <div className="tab-content" id="spec">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>
            </div>
            <div className="tab-content" id="ret">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </p>
            </div>
          </div>
        </div>
        <div className="actions">
          <label>Quantity:</label>
          <span className="crf-s hided-s" id="crf-s-0">
            <select className="hided-s" style={{display: 'none'}}>
              <option>1</option>
            </select>
            <span className="option">1</span>
          </span>
          <a href="/" className="btn-grey">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductFull;
