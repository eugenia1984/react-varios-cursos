import React from "react";
import HeroImg from "../../assets/hero-image.png";
import HeroHeader from "./HeroHeader";
import HeroText from "./HeroText";
import "./HeroStyles.css";

function Hero() {
  return (
    <section className="hero">
      <img 
        className="hero-photo"
        src={ HeroImg } 
        alt="experiencie of airbnb" />
      <HeroHeader text="Online Experiencies" />
      <HeroText text="Join unique interactive activities led by one&#x2011;of&#x2011;a&#x2011;kind host&#x2011;all without leaving home." />
    </section>
  );
}

export default Hero;