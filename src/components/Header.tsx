import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import girilogo from "../assets/girilogo.png";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="header-logo-link">
          <img src={girilogo} alt="Giri Law Firm" className="header-logo" />
        </NavLink>

        <nav className="header-nav">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>

            <li className="dropdown">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About Us <span className="dropdown-arrow">▼</span>
              </NavLink>
              <div className="dropdown-menu">
                <NavLink to="/our-firm">Our Firm</NavLink>
                <NavLink to="/team">Our Team</NavLink>
                <NavLink to="/join">Join Us</NavLink>
              </div>
            </li>

            <li className="dropdown">
              <NavLink
                to="/practice-area"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Practice Area <span className="dropdown-arrow">▼</span>
              </NavLink>
              <div className="dropdown-menu">
                <NavLink to="/banking-finance">Banking & Finance</NavLink>
                <NavLink to="/corporate-commercial">
                  Corporate & Commercial
                </NavLink>
                <NavLink to="/litigation-arbitration">
                  Litigation & Arbitration
                </NavLink>
                <NavLink to="/mergers-acquisitions">
                  Mergers & Acquisitions
                </NavLink>
                <NavLink to="/intellectual-property">
                  Intellectual Property
                </NavLink>
              </div>
            </li>

            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/news-publication"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                News & Publication
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
