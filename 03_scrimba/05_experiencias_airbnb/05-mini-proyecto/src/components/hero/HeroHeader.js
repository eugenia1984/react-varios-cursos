import React from "react";
import "./HeroStyles.css";

function HeroHeader( { text }) {
  return (
    <h1 className="hero-header">{ text }</h1>
        
  );
}

export default HeroHeader;