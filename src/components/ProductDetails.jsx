import React from "react";
import "./card.css"
import { useNavigate } from "react-router-dom";

const ProductDetails = ({ product, isSingle, cart, setCart }) => {
  console.log("cart", cart);
  const navigate = useNavigate();
  const handleViewItemClick = () => {
    if (isSingle) {
    navigate(`/`);
    } else {
      navigate(`/${product.id}`);
    }
    };
  const handleAddToCart = () => {
    
    const productId = product.id;
    // if the product is already in the cart, update the quantity
    const existingCartItemIndex = cart.findIndex(
      (item) => item.productId === productId)
    if (existingCartItemIndex !== -1) {
      //make a copy of existing cart
      const updatedCart = [...cart];
      // upddate quantity
      updatedCart[existingCartItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // if the new product is not in the cart add it with quantity 1
      const newItem = {productId, quantity: 1};
      setCart((prevCart) => [...prevCart, newItem]);
    }

  };

    
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <div className="card-content">
        <h2 className="card-title">{product.title}</h2>
        {isSingle && <p className="card-description">{product.description}</p>}
        <p className="card-price">${product.price}</p>
        <button className="card-button" onClick={handleAddToCart}>Add to Cart</button>
        {!isSingle && <button onClick={handleViewItemClick} className="view-item-button">View Item</button>}
        {isSingle && <button onClick={handleViewItemClick} className="view-item-button">Go Back</button>}
      </div>
    </div>
  );

};

export default ProductDetails;