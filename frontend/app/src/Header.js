
import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/Login" className="nav-link">
          Login
        </Link>
        <Link to="/Signup" className="nav-link">
          Signup
        </Link>
      </nav>
    </header>
  );
};

export default Header;
