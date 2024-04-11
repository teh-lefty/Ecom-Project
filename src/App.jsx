import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AllProducts from './components/AllProducts'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import { getAllProducts } from './components/API/index' 
import SingleProduct from './components/SingleProduct'
import Cart from './components/Cart'
import CheckoutPage from './components/CheckoutPage'



function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [products, setproducts] = useState([]);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  
  
  
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
    const userObj = JSON.stringify(user);
    localStorage.setItem("user", userObj);
    const cartArr = JSON.stringify(cart);
    localStorage.setItem("cart", cartArr);
    } else {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
  }
    
  }, [token]);

  return (
    <>
    <Navbar token={token} setToken={setToken} cart={cart}  />
      <Routes>
        <Route path="/" 
        element={<AllProducts products={products} cart={cart} setCart={setCart} />} 
        />
        <Route 
        path="/login" 
        element={<Login setToken={setToken} setUser={setUser} setCart={setCart}/>} 
        />
        <Route path="/:productId" 
        element={<SingleProduct cart={cart} setCart={setCart} />} 
        /> 
        <Route 
        path="/cart" 
        element={<Cart cart={cart} products={products} setCart={setCart}  />}
         />
      <Route path="/checkout" element={<CheckoutPage cart={cart} setCart={setCart} />} />
      </Routes>
    </>
  );
}

export default App