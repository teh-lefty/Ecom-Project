import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./nav.css";


const Navbar = ({token, setToken}) => {
  const navigate = useNavigate()
  const handleLogout = () => {
    setToken(null);
    navigate("/login");
  }
  return (
    <nav className="navbar-container">
      <ul className="navbar">
      <span>Capstone</span>
        <li><Link className="nav-link" to="/">Products</Link></li>
        <li>
          {token ? (
            <button className="logout-button" onClick={handleLogout}>Logout</button>
            ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  ) 
}

export default Navbar;