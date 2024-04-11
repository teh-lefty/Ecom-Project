import React from "react";
import "./CartItemCard.css";

const CartItemCard = ({ cartItem, quantity, onIncrement, onDecrement, onEdit }) => {
  const handleIncrement = () => {
    onIncrement(cartItem.id);
  };
  const handleDecrement = () => {
    onDecrement(cartItem.id);
  };
  
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
          <p>Quantity: {quantity}</p>
        </div>
        <div className="quantity-buttons">
          <button className="quantity-button" onClick={handleIncrement} > + </button>
          <button className="quantity-button" onClick={handleDecrement} > - </button>
        </div>
      </div>
  )
  
};

export default CartItemCard;
  