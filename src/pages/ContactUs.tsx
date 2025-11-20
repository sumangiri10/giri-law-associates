import React from "react";
import "../styles/pages.css";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Banner */}
      <div className="page-banner">
        <div className="page-banner-content">
          <h1 className="page-banner-title">Contact Us</h1>
          <div className="page-banner-divider"></div>
        </div>
      </div>

      {/* Contact Content */}
      <div
        style={{ padding: "5rem 4rem", maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* Introduction */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#666",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            Get in touch with our legal team. We are here to assist you with
            your legal needs.
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="contact-info-grid">
          {/* Office Address */}
          <div className="contact-info-box">
            <div className="contact-info-icon">📍</div>
            <h3>Office Address</h3>
            <p>
              Kathmandu, Nepal
              <br />
              Putalisadak
              <br />
              Opposite to Star Mall
            </p>
          </div>

          {/* Contact Info */}
          <div className="contact-info-box">
            <div className="contact-info-icon">📞</div>
            <h3>Contact Details</h3>
            <p>
              Phone: +977 9869489751
              <br />
              Mobile: +977 9864244422
              <br />
              Email: girilawfirm@gmail.com
            </p>
          </div>

          {/* Office Hours */}
          <div className="contact-info-box">
            <div className="contact-info-icon">🕒</div>
            <h3>Office Hours</h3>
            <p>
              Sunday - Friday
              <br />
              10:00 AM - 5:00 PM
              <br />
              Saturday: Closed
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div style={{ marginTop: "4rem" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2rem",
              color: "#8B4513",
              marginBottom: "2rem",
            }}
          >
            Find Us On Map
          </h2>
          <div
            style={{
              width: "100%",
              height: "450px",
              border: "3px solid #D4AF37",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3876891807744!2d85.31477687549654!3d27.703661376195634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fdb7d6c5af%3A0x8b0d836a7f6c7e6f!2sPutalisadak%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1699999999999!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Additional Info Section */}
        <div
          style={{
            marginTop: "4rem",
            padding: "3rem 2rem",
            backgroundColor: "#F9F7F4",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "1.8rem",
              fontWeight: "700",
              color: "#8B4513",
              marginBottom: "1rem",
            }}
          >
            Schedule a Consultation
          </h3>
          <p
            style={{
              color: "#666",
              lineHeight: "1.8",
              fontSize: "1.1rem",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Contact us today to schedule a consultation with our experienced
            legal team. We are committed to providing personalized legal
            solutions for your needs.
          </p>
        </div>
      </div>
    </div>
  );
}
