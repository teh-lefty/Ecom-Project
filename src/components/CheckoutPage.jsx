import React from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div>
      <h1>Checkout</h1>
      <form className="checkout-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Your name" required />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" placeholder="Your address" required />

        <label htmlFor="card-details">Card Details:</label>
        <input
          type="text"
          id="card-details"
          placeholder="Credit card number"
          required
        />

        <label htmlFor="expiry">Expiry:</label>
        <input type="text" id="expiry" placeholder="MM/YY" required />

        <label htmlFor="cvc">CVC:</label>
        <input type="text" id="cvc" placeholder="CVC" required />

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
