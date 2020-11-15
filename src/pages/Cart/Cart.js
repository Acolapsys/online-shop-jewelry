import React from "react";
import {CartItem} from "../../components";

const Cart = () => {
  return (
    <div id="content" className="full">
      <div className="cart-table">
        <table>
          <tbody>
            <tr>
              <th className="items">Items</th>
              <th className="price">Price</th>
              <th className="qnt">Quantity</th>
              <th className="total">Total</th>
              <th className="delete"></th>
            </tr>
            <CartItem
              imageLink="images/6.jpg"
              title="Lorem ipsum dolor"
              desc="Dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupti quos dolores et quas molestias
                  excepturi sint occaecati cupiditate non provident, similique
                  sunt in culpa qui officia deserunt mollitia animi."
              price="$1 350.00"
              quantity="1"
            />
            <CartItem
              imageLink="images/6.jpg"
              title="Lorem ipsum dolor"
              desc="Dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupti quos dolores et quas molestias
                  excepturi sint occaecati cupiditate non provident, similique
                  sunt in culpa qui officia deserunt mollitia animi."
              price="$1 350.00"
              quantity="1"
            />
            <CartItem
              imageLink="images/6.jpg"
              title="Lorem ipsum dolor"
              desc="Dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupti quos dolores et quas molestias
                  excepturi sint occaecati cupiditate non provident, similique
                  sunt in culpa qui officia deserunt mollitia animi."
              price="$1 350.00"
              quantity="1"
            />
            <CartItem
              imageLink="images/6.jpg"
              title="Lorem ipsum dolor"
              desc="Dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupti quos dolores et quas molestias
                  excepturi sint occaecati cupiditate non provident, similique
                  sunt in culpa qui officia deserunt mollitia animi."
              price="$1 350.00"
              quantity="1"
            />
            <CartItem
              imageLink="images/6.jpg"
              title="Lorem ipsum dolor"
              desc="Dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupti quos dolores et quas molestias
                  excepturi sint occaecati cupiditate non provident, similique
                  sunt in culpa qui officia deserunt mollitia animi."
              price="$1 350.00"
              quantity="1"
            />
          </tbody>
        </table>
      </div>

      <div className="total-count">
        <h4>Subtotal: $4 500.00</h4>
        <p>+shippment: $30.00</p>
        <h3>
          Total to pay: <strong>$4 530.00</strong>
        </h3>
        <a href="/" className="btn-grey">
          Finalize and pay
        </a>
      </div>
    </div>
  );
};

export default Cart;
