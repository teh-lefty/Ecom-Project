import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "./API";
import ProductDetails from "./ProductDetails";

const SingleProduct = ({ cart, setCart }) => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const product = await getSingleProduct(productId);
      setProduct(product);
    };
    fetchSingleProduct();
  }, [productId]);
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <ProductDetails product={product} isSingle cart={cart} setCart={setCart} />
  );
};

export default SingleProduct;
