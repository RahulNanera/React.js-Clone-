import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <h1>We Ensure Better Education For a Better World</h1>
      <p>
        Our cutting-edge curriculum is designed to empower students with the
        knowledge , skills and the experience needed to excel in the dynamic
        field of eduction .
      </p>
      <button id="btn2">
        Explore more <img src={dark_arrow} alt="error" id="img2" />
      </button>
    </div>
  );
};

export default Hero;
