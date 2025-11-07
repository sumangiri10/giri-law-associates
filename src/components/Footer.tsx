import React from "react";
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
            <li>- girilaw@gmail.com</li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-section-title">THE FIRM</div>
          <ul>
            <li>
              <a href="#">Our Firm</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">News & Publications</a>
            </li>
            <li>
              <a href="#">Join Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-section-title">PRACTICE AREAS</div>
          <ul>
            <li>
              <a href="#">Banking & Finance</a>
            </li>
            <li>
              <a href="#">Corporate & Commercial</a>
            </li>
            <li>
              <a href="#">Litigation & Arbitration</a>
            </li>
            <li>
              <a href="#">Mergers & Acquisitions</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Social icons bar below all columns, centered */}
      <div className="footer-socials-bar">
        <a href="https://www.facebook.com/" aria-label="Facebook">
          <img
            src="https://img.icons8.com/fluency/48/facebook-new.png"
            alt="Facebook"
          />
        </a>
        <a href="https://www.instagram.com/" aria-label="Instagram">
          <img
            src="https://img.icons8.com/fluency/48/instagram-new.png"
            alt="Instagram"
          />
        </a>
        <a href="https://www.youtube.com/" aria-label="Youtube">
          <img
            src="https://img.icons8.com/?size=100&id=19318&format=png&color=000000"
            alt="Youtube"
          />
        </a>
        <a href="https://www.linkedin.com/" aria-label="LinkedIn">
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
