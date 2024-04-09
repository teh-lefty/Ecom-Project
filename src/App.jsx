import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Products from './components/Products'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import { getAllProducts } from './components/API/index' 
import SingleProduct from './components/SingleProduct'



function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [products, setproducts] = useState([]);
  
  useEffect(() => {
    const fetchAllProducts = async () => {
      const products = await getAllProducts();
      setproducts(products);
    };
    fetchAllProducts();
    
  }, [])
  useEffect(() => {
    if (token) {
    localStorage.setItem("token", token);
    } else {
    localStorage.removeItem("token");
  }
    
  }, [token]);

  return (
    <>
    <Navbar token={token} setToken={setToken} />
      <Routes>
        <Route path="/" element={<Products products={products} />} />
        <Route path="/login" element={<Login setToken={setToken}/>} />
        <Route path="/:productId" element={<SingleProduct />} /> 
      </Routes>
    </>
  );
}

export default App
