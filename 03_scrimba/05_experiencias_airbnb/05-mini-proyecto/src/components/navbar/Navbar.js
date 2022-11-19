import React from "react";
import logo from "../../assets/logo.png";
import "./NavbarStyle.css";

function Navbar() {
  return (
    <nav>
      <img 
        className="nav-logo"
        src={ logo } 
        alt="airbnb logo" 
        width={70} />
    </nav>
  );
}

export default Navbar;