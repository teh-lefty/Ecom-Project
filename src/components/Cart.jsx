import React from "react";
import CartItemCard from "./CartItemCard";


const Cart = ({ cart, products, setCart }) => { 
  console.log ("cart", cart, "products", products);
  // helper function
  const getAllItemDetails = (cartItem) => 
    products.find((product) => product.id === cartItem.productId);
  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Total Items: {cart.length}</p>
      {cart.map((item) => {
        const productItem = getAllItemDetails(item);
        return <CartItemCard key={productItem?.id} cartItem={productItem} />;
        
})}
    </div>
  );
  
};

export default Cart;