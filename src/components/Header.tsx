import React from "react";
import "./Header.css";
import girilogo from "../assets/girilogo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="header-logo-link">
          <img src={girilogo} alt="Giri Law Firm" className="header-logo" />
        </a>
        <nav className="header-nav">
          <ul>
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>
            <li className="dropdown">
              <a href="#">
                About Us <span className="dropdown-arrow">&#9662;</span>
              </a>
              <div className="dropdown-menu">
                <a href="#">Our Firm</a>
                <a href="#">Our Team</a>
                <a href="#">Join Us</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#">
                Practice Area <span className="dropdown-arrow">&#9662;</span>
              </a>
              <div className="dropdown-menu">
                <a href="#">Banking & Finance</a>
                <a href="#">Corporate & Commercial</a>
                <a href="#">Litigation & Arbitration</a>
                <a href="#">Mergers & Acquisitions</a>
                <a href="#">Intellectual Property</a>
              </div>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">News & Publication</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
