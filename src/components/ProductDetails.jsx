import React from "react";
import "./card.css"
import { useNavigate } from "react-router-dom";

const ProductDetails = ({ product, isSingle }) => {
  const navigate = useNavigate();
  const handleViewItemClick = () => {
    if (isSingle) {
    navigate(`/`);
    } else {
      navigate(`/${product.id}`);
    }
    
  }
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <div className="card-content">
        <h2 className="card-title">{product.title}</h2>
        {isSingle && <p className="card-description">{product.description}</p>}
        <p className="card-price">${product.price}</p>
        <button className="card-button">Add to Cart</button>
        {!isSingle && <button onClick={handleViewItemClick} className="view-item-button">View Item</button>}
        {isSingle && <button onClick={handleViewItemClick} className="view-item-button">Go Back</button>}
      </div>
    </div>
  )
};

export default ProductDetails;