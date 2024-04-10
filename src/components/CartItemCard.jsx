import React from "react";
import "./CartItemCard.css";

const CartItemCard = ({ cartItem }) => {
  
  return (
      <div className="cart-item-card">
        <div className="cart-image-container">
          <img 
          src={cartItem?.image} 
          alt={cartItem?.title} 
          className="cart-item-image"
          />
        </div>
        <div className="cart-item-details">
          <h3>{cartItem?.title}</h3>
          <p>Price: ${cartItem?.price}</p>
        </div>
        <div className="quantity-buttons">
          <button className="quantity-button"> + </button>
          <button className="quantity-button"> - </button>
        </div>
      </div>
  )
  
};

export default CartItemCard;
  