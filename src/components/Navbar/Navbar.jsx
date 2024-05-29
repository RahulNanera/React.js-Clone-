import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="error" id="img1" />
      <nav>
        <ul>
          <li>
            <Link to="hero" smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="programs" smooth={true} offset={-80} duration={500}>
              Program
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-90} duration={500}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="campus" smooth={true} offset={-70} duration={500}>
              Campus
            </Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} offset={-70} duration={500}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={-70} duration={500}>
              <button id="btn1">Contact Us</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
