import React, { useState } from "react";
import Time from "../Time/Time";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  const time = props.time;

  return (
    <div className="cart_container">
      <div className="spend_time">
        <Time time={time}
         ></Time>
      </div>
      <div className="Bookmark">
        <h2>Bookmarked Blogs:{cart.length}</h2>
        <div className="content">
          {
          cart.map((ct) => (
            <p key={ct.id}>
                {ct.title}</p>
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default Cart;
