import React from "react";
import "./navbarstyle.css";
import logo from './../../assets/logo.svg';

function Navbar() {
  return (
    <nav>
      <img className="nav-icon" src={logo} alt="logo de React" width="30px" />
      <h3 className="nav-logo-text">React Facts</h3>
      <h4 className="nav-title">React Course - Project 1</h4>
    </nav>
  );
}

export default Navbar;