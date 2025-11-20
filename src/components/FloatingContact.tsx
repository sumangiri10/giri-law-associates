import React from "react";
import "./FloatingContact.css";

const FloatingContact = () => {
  return (
    <div className="floating-contact">
      {/* Phone */}
      <a href="tel:+9779869489751" className="floating-btn phone">
        <span className="icon">📞</span>
        <span className="label">+977 9869489751</span>
      </a>

      {/* Email */}
      <a href="mailto:girilawfirm@gmail.com" className="floating-btn email">
        <span className="icon">✉</span>
        <span className="label">girilawfirm@gmail.com</span>
      </a>
    </div>
  );
};

export default FloatingContact;
