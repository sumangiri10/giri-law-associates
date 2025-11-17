import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import girilogo from "../assets/girilogo.png";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo-link">
          <img src={girilogo} alt="Giri Law Firm" className="header-logo" />
        </Link>

        <nav className="header-nav">
          <ul>
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>

            <li className="dropdown">
              <Link to="/about">
                About Us <span className="dropdown-arrow">&#9662;</span>
              </Link>
              <div className="dropdown-menu">
                <Link to="/our-firm">Our Firm</Link>
                <Link to="/team">Our Team</Link>
                <Link to="/join">Join Us</Link>
              </div>
            </li>

            <li className="dropdown">
              <Link to="/practice-area">
                Practice Area <span className="dropdown-arrow">&#9662;</span>
              </Link>
              <div className="dropdown-menu">
                <Link to="/banking-finance">Banking & Finance</Link>
                <Link to="/corporate-commercial">Corporate & Commercial</Link>
                <Link to="/litigation-arbitration">
                  Litigation & Arbitration
                </Link>
                <Link to="/mergers-acquisitions">Mergers & Acquisitions</Link>
                <Link to="/intellectual-property">Intellectual Property</Link>
              </div>
            </li>

            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/news-publication">News & Publication</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
