import React from "react";
import "../styles/pages.css";

export default function MergersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Banner */}
      <div className="page-banner">
        <div className="page-banner-content">
          <h1 className="page-banner-title">Mergers & Acquisitions</h1>
          <div className="page-banner-divider"></div>
          <p className="page-banner-subtitle">
            Strategic Advisory for Corporate Transactions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="page-content-section">
        <div className="content-grid">
          <div className="content-text">
            <h2>Mergers & Acquisitions</h2>
            <div className="section-divider"></div>
            <p>
              Our mergers and acquisitions practice provides comprehensive legal
              support for complex corporate transactions. We guide clients
              through every stage of the M&A process, from initial structuring
              and due diligence to negotiation, documentation, and post-merger
              integration.
            </p>
            <p>
              With deep expertise in corporate law, securities regulations, and
              transaction structuring, we deliver strategic advice that
              maximizes value while managing legal and regulatory risks
              throughout the transaction lifecycle.
            </p>
          </div>
          <div className="content-image">
            <img
              src="https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80"
              alt="Mergers & Acquisitions"
            />
          </div>
        </div>

        {/* Key Practice Areas */}
        <div className="content-text">
          <h2>Our M&A Expertise</h2>
          <div className="section-divider"></div>

          <div className="highlight-box">
            <h3>Mergers & Consolidations</h3>
            <p>
              Advising on merger transactions including statutory mergers,
              consolidations, and amalgamations. Structuring optimal merger
              arrangements, obtaining shareholder approvals, securing regulatory
              clearances, and managing the entire merger process under Companies
              Act and Securities regulations.
            </p>
          </div>

          <div className="highlight-box">
            <h3>Acquisitions & Takeovers</h3>
            <p>
              Representing acquirers and targets in share purchase transactions,
              asset acquisitions, and takeover bids. Strategic advice on deal
              structuring, valuation negotiations, purchase agreements, and
              compliance with takeover regulations and competition laws.
            </p>
          </div>

          <div className="highlight-box">
            <h3>Legal Due Diligence</h3>
            <p>
              Conducting comprehensive legal due diligence reviews covering
              corporate structure, contracts, intellectual property, real
              estate, litigation, compliance, and regulatory matters.
              Identifying legal risks, liabilities, and opportunities to inform
              transaction decisions.
            </p>
          </div>

          <div className="highlight-box">
            <h3>Transaction Documentation</h3>
            <p>
              Drafting and negotiating transaction documents including share
              purchase agreements, asset purchase agreements, merger agreements,
              shareholders' agreements, non-disclosure agreements, and ancillary
              transaction documents with robust representations and warranties.
            </p>
          </div>

          <div className="highlight-box">
            <h3>Corporate Restructuring</h3>
            <p>
              Advising on corporate reorganizations, demergers, spin-offs,
              business divisions, and group restructuring. Structuring
              tax-efficient reorganizations while ensuring compliance with
              corporate laws and protecting stakeholder interests.
            </p>
          </div>

          <div className="highlight-box">
            <h3>Regulatory Approvals</h3>
            <p>
              Managing regulatory approval processes including clearances from
              Securities Board, Company Registrar, Nepal Rastra Bank, sectoral
              regulators, and competition authorities. Ensuring compliance with
              foreign investment regulations where applicable.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="content-text" style={{ marginTop: "4rem" }}>
          <h2>Why Choose Our M&A Practice?</h2>
          <div className="section-divider"></div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h4>Transaction Expertise</h4>
              <p>
                Extensive experience in complex M&A transactions across diverse
                industries and deal structures.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">📊</div>
              <h4>Commercial Insight</h4>
              <p>
                Business-focused advice that balances legal protection with
                commercial objectives and deal momentum.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h4>End-to-End Support</h4>
              <p>
                Comprehensive support from initial planning through closing and
                post-transaction integration.
              </p>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="content-text" style={{ marginTop: "4rem" }}>
          <h2>Comprehensive M&A Services</h2>
          <div className="section-divider"></div>
          <ul>
            <li>Merger structuring and implementation</li>
            <li>Share and asset acquisition advisory</li>
            <li>Legal due diligence investigations</li>
            <li>Transaction documentation and negotiation</li>
            <li>Valuation and pricing advisory</li>
            <li>Regulatory compliance and approvals</li>
            <li>Corporate restructuring and reorganization</li>
            <li>Joint ventures and strategic alliances</li>
            <li>Takeover regulations and compliance</li>
            <li>Post-merger integration support</li>
            <li>Cross-border transaction advisory</li>
            <li>Shareholder and board approvals</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
