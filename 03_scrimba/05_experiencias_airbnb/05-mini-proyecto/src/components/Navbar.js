import React from "react";
import logo from "../assets/logo.png";

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