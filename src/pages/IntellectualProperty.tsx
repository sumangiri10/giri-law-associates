import React from "react";
import "../styles/pages.css";

export default function PropertyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Banner */}
      <div className="page-banner">
        <div className="page-banner-content">
          <h1 className="page-banner-title">Intellectual Property</h1>
          <div className="page-banner-divider"></div>
          <p className="page-banner-subtitle">
            Protecting Innovation and Creative Assets
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="page-content-section">
        <div className="content-grid">
          <div className="content-text">
            <h2>Intellectual Property</h2>
            <div className="section-divider"></div>
            <p>
              Our intellectual property practice provides comprehensive legal
              services for protecting, managing, and enforcing IP rights. We
              assist clients in securing patents, trademarks, copyrights, and
              other intellectual property assets critical to business success.
            </p>
            <p>
              With expertise in Nepal's IP laws and international treaties, we
              help businesses, innovators, and creative professionals safeguard
              their intellectual assets and maximize their commercial value in
              an increasingly competitive marketplace.
            </p>
          </div>
          <div className="content-image">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
              alt="Intellectual Property"
            />
          </div>
        </div>

        {/* Key Practice Areas */}
        <div className="content-text">
          <h2>Our Intellectual Property Expertise</h2>
          <div className="section-divider"></div>

          <div className="highlight-box">
            <h3>Trademark Registration & Protection</h3>
            <p>
              Comprehensive trademark services including availability searches,
              application filing with Department of Industry, prosecution,
              registration, and renewal. Protecting brand identity through
              strategic trademark portfolio management and monitoring for
              potential infringements.
            </p>
          </div>

          <div className="highlight-box">
            <h3>Patent Services</h3>
            <p>
              Assisting inventors and businesses with patent applications, prior
              art searches, and patent prosecution. Advising on patentability of
              inventions, drafting patent specifications, and managing patent
              portfolios to protect technological innovations and industrial
              designs.
            </p>
          </div>

          <div className="highlight-box">
            <h3>Copyright Protection</h3>
            <p>
              Protecting original works of authorship including literary,
              artistic, musical, and software creations. Copyright registration,
              licensing agreements, assignment of rights, and enforcement
              against unauthorized reproduction, distribution, or public
              performance of protected works.
            </p>
          </div>

          <div className="highlight-box">
            <h3>IP Litigation & Enforcement</h3>
            <p>
              Vigorous representation in intellectual property disputes
              including trademark infringement, patent litigation, copyright
              violations, and unfair competition claims. Handling cease and
              desist proceedings, court litigation, and customs enforcement
              against counterfeit goods.
            </p>
          </div>

          <div className="highlight-box">
            <h3>Licensing & Commercialization</h3>
            <p>
              Drafting and negotiating IP licensing agreements, technology
              transfer agreements, franchise arrangements, and distribution
              licenses. Structuring transactions to maximize value from
              intellectual property while protecting proprietary rights and
              ensuring regulatory compliance.
            </p>
          </div>

          <div className="highlight-box">
            <h3>Trade Secrets & Confidential Information</h3>
            <p>
              Protecting confidential business information, proprietary
              processes, and trade secrets through non-disclosure agreements,
              employment contracts, and internal policies. Advising on trade
              secret misappropriation claims and enforcement strategies.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="content-text" style={{ marginTop: "4rem" }}>
          <h2>Why Choose Our IP Practice?</h2>
          <div className="section-divider"></div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🔒</div>
              <h4>Comprehensive Protection</h4>
              <p>
                Full-spectrum IP services covering all forms of intellectual
                property rights and enforcement mechanisms.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h4>Strategic Approach</h4>
              <p>
                Business-focused IP strategies that align with commercial
                objectives and competitive positioning.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌐</div>
              <h4>Global Perspective</h4>
              <p>
                Knowledge of international IP treaties and cross-border
                protection strategies for global markets.
              </p>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="content-text" style={{ marginTop: "4rem" }}>
          <h2>Comprehensive IP Services</h2>
          <div className="section-divider"></div>
          <ul>
            <li>Trademark search, registration, and renewal</li>
            <li>Patent application and prosecution</li>
            <li>Copyright registration and protection</li>
            <li>Industrial design registration</li>
            <li>IP portfolio management and strategy</li>
            <li>Licensing and technology transfer agreements</li>
            <li>IP due diligence for transactions</li>
            <li>Trade secret protection and NDA drafting</li>
            <li>Domain name disputes and protection</li>
            <li>IP infringement litigation and enforcement</li>
            <li>Brand protection and anti-counterfeiting</li>
            <li>IP valuation and commercialization advisory</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
