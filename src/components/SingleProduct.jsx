import React, { useState, useEffect } from 'react';
import { getSingleProduct } from './API';
import { useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const SingleProduct = () => {
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
  };
  return product &&<ProductDetails product={product} isSingle />;
    
    
  
};

export default SingleProduct;