import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-col footer-col-1">
          <div className="footer-title">GIRI LAW ASSOCIATES</div>
          <div className="footer-reg">LAW FIRM REG. NO : 123456</div>
          <ul className="footer-contact">
            <li>- Lagankhel, Lalitpur, Nepal</li>
            <li>- Putalisadak, Kathmandu, Nepal</li>
            <li>- +977 9869489751, 9864244422</li>
            <li>- girilawfirm@gmail.com</li>
          </ul>
        </div>

        <div className="footer-col">
          <div className="footer-section-title">THE FIRM</div>
          <ul>
            <li>
              <Link to="/our-firm">Our Firm</Link>
            </li>
            <li>
              <Link to="team">Our Team</Link>
            </li>
            <li>
              <Link to="/news-publication">News & Publications</Link>
            </li>
            <li>
              <Link to="/join">Join Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <div className="footer-section-title">PRACTICE AREAS</div>
          <ul>
            <li>
              <Link to="/banking-finance">Banking & Finance</Link>
            </li>
            <li>
              <Link to="/corporate-commercial">Corporate & Commercial</Link>
            </li>
            <li>
              <Link to="/litigation-arbitration">Litigation & Arbitration</Link>
            </li>
            <li>
              <Link to="/mergers-acquisitions">Mergers & Acquisitions</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Social icons bar below all columns, centered */}
      <div className="footer-socials-bar">
        <a
          href="https://www.facebook.com/"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/fluency/48/facebook-new.png"
            alt="Facebook"
          />
        </a>
        <a
          href="https://www.instagram.com/"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/fluency/48/instagram-new.png"
            alt="Instagram"
          />
        </a>
        <a
          href="https://www.youtube.com/"
          aria-label="Youtube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/?size=100&id=19318&format=png&color=000000"
            alt="Youtube"
          />
        </a>
        <a
          href="https://www.linkedin.com/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/color/50/linkedin.png"
            alt="LinkedIn"
          />
        </a>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          Copyright © {new Date().getFullYear()}, All Rights Reserved. GIRI LAW
          ASSOCIATES - Law Firm Nepal.
          <br />
          This site is for information purpose only and should not be construed
          as advertisement or solicitation.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
