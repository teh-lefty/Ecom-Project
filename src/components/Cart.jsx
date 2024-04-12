import React from "react";
import { addCartItem, removeCartItem } from "../utils/helpers";
import CartItemCard from "./CartItemCard";

const Cart = ({ cart, products, setCart }) => {
  console.log("Cart component - cart:", cart);
  // helper function
  const getAllItemDetails = (cartItem) =>
    products.find((product) => product.id === cartItem.productId);

  const handleIncrement = (id) => {
    setCart((prevCart) => addCartItem(prevCart, id));
  };
  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Total Items: </p>
      {cart.map((item) => {
        const productItem = getAllItemDetails(item);
        return (
          <CartItemCard
            key={item.productId}
            cartItem={productItem}
            quantity={item.quantity}
            onIncrement={handleIncrement}
            // onEdit={handleEditQuantity}
          />
        );
      })}
    </div>
  );
};

export default Cart;
