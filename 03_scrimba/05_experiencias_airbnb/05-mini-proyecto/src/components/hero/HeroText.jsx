import React from "react";
import "./HeroStyles.css";

function HeroText( { text }) {
  return (
    <p className="hero-text"> { text }</p>
        
  );
}

export default HeroText;