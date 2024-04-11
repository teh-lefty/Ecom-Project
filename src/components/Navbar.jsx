import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./nav.css";



const Navbar = ({ token, setToken, totalItemsCount }) => {
  const navigate = useNavigate()
  const handleLogout = () => {
    setToken(null);
    navigate("/login");
  }
  return (
    <nav className="navbar-container">
      <div className="header-logo"> <span className="navbar-brand navbar-logo">Capstone</span></div>
      <ul className="navbar">
        <ul>
        <li><Link className="nav-link" to="/">Products</Link></li>
        <li><Link className="nav-link" to="/">About</Link></li>
        <li><Link className="nav-link" to="/">Contact</Link></li>
        </ul>
        <ul>
        <li> <Link className="nav-link" to="/cart">Cart ({totalItemsCount})</Link></li>
        <li>
          {token ? (
            <button className="logout-button" onClick={handleLogout}>Logout</button>
            ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
        
      </ul>
      </ul>
    </nav>
  ) 
}
export default Navbar;