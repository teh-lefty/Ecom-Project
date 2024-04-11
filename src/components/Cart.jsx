import React from "react";
import CartItemCard from "./CartItemCard";
import { addCartItem, removeCartItem, editCartItemQuantity } from "../utils/helpers";


const Cart = ({ cart, products, setCart }) => { 
  
  // helper function
  const getAllItemDetails = (cartItem) => 
    products.find((product) => product.id === cartItem.productId);

    const handleIncrement = (id) => {
      setCart((prevCart) => addCartItem(prevCart, id) );
    };
    const handleDecrement = (id) => {
      setCart((prevCart) => removeCartItem(prevCart, id) );
    };
    const handleEditQuantity = (id, newQuantity) => {
      //TODO
    }
    
  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Total Items: </p>
      {cart.map((item) => {
        const productItem = getAllItemDetails(item);
        return (
        <CartItemCard 
        key={productItem?.id} 
        cartItem={productItem} 
        quantity={item.quantity}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onEdit={handleEditQuantity}
        />
        );
        
})}
    </div>
  );
  
};

export default Cart;