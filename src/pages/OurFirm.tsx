import React from "react";
import "../styles/pages.css";

export default function OurFirmPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Banner */}
      <div className="page-banner">
        <div className="page-banner-content">
          <h1 className="page-banner-title">Our Firm</h1>
          <div className="page-banner-divider"></div>
          <p className="page-banner-subtitle">Excellence in Legal Practice</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="page-content-section">
        {/* Introduction */}
        <div className="content-grid">
          <div className="content-text">
            <h2>Who We Are?</h2>
            <div className="section-divider"></div>
            <p>
              We are a leading law firm in Nepal, committed to delivering
              comprehensive legal services with the highest standards of
              professionalism and ethical practice. Our team of experienced
              legal professionals brings decades of combined expertise across
              diverse practice areas.
            </p>
            <p>
              Founded on principles of integrity, excellence, and client
              service, our firm has established itself as a trusted partner for
              individuals, businesses, and organizations seeking reliable legal
              counsel and representation.
            </p>
          </div>
          <div className="content-image">
            <img
              src="https://assets.architecturaldigest.in/photos/600820453a9d9570bc840c0a/16:9/w_1600,c_limit/interior-design-office-space-studio-course1-1366x768.jpg"
              alt="Our law firm office"
              width={600}
              height={400}
            />
          </div>
        </div>

        {/* Our Approach */}
        <div className="highlight-box">
          <h3>Our Approach</h3>
          <p>
            We believe in building lasting relationships with our clients
            through transparent communication, strategic thinking, and dedicated
            advocacy. Every case receives personalized attention, ensuring that
            our legal strategies align with our clients' unique goals and
            circumstances.
          </p>
        </div>

        {/* Expertise Section */}
        <div className="content-grid" style={{ marginTop: "4rem" }}>
          <div className="content-image">
            <img
              src="https://www.legalsupportworld.com/wp-content/uploads/2018/11/Legal-services-blog.jpg"
              alt="Legal expertise"
              width={600}
              height={400}
            />
          </div>
          <div className="content-text">
            <h2>Our Expertise</h2>
            <div className="section-divider"></div>
            <p>
              Our practice encompasses a comprehensive range of legal services
              including corporate law, civil litigation, criminal defense,
              family law, property law, and intellectual property rights. We
              stay current with Nepal's evolving legal landscape to provide
              cutting-edge legal solutions.
            </p>
            <p>
              With extensive experience in both domestic and international legal
              matters, we are equipped to handle complex cases that require
              nuanced understanding of Nepali law and its practical application.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-section" style={{ marginTop: "5rem" }}>
          <div className="stat-box">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">500+</div>
            <div className="stat-label">Cases Won</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">20+</div>
            <div className="stat-label">Practice Areas</div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div style={{ marginTop: "5rem" }}>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Why Choose Our Firm?
          </h2>
          <div
            className="section-divider"
            style={{ margin: "1rem auto 3rem" }}
          ></div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">⚖️</div>
              <h4>Expert Legal Team</h4>
              <p>
                Highly qualified attorneys with extensive experience in Nepal's
                legal system and proven track record of success.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h4>Client-Focused Service</h4>
              <p>
                Personalized attention and strategic counsel tailored to each
                client's specific needs and objectives.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">💼</div>
              <h4>Comprehensive Solutions</h4>
              <p>
                Full-spectrum legal services covering all major practice areas
                under one trusted firm.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h4>Ethical Practice</h4>
              <p>
                Unwavering commitment to professional ethics, integrity, and
                confidentiality in all matters.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h4>Responsive Communication</h4>
              <p>
                Always accessible and keeping clients informed throughout every
                stage of their legal journey.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h4>Results-Driven</h4>
              <p>
                Dedicated to achieving the best possible outcomes through
                strategic advocacy and thorough preparation.
              </p>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div className="highlight-box" style={{ marginTop: "5rem" }}>
          <h3>Partner With Us</h3>
          <p>
            Whether you are facing a complex legal challenge or seeking
            preventive legal advice, our firm is ready to provide the skilled
            representation and guidance you need. We invite you to experience
            the difference that dedicated, professional legal service can make.
            Contact us today to discuss how we can assist you.
          </p>
        </div>
      </div>
    </div>
  );
}
