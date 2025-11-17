import React from "react";
import "../styles/pages.css";

export default function BankingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Banner */}
      <div className="page-banner">
        <div className="page-banner-content">
          <h1 className="page-banner-title">Banking & Finance</h1>
          <div className="page-banner-divider"></div>
          <p className="page-banner-subtitle">
            Expert Legal Services for Banking & Financial Matters
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="page-content-section">
        <div className="content-grid">
          <div className="content-text">
            <h2>Banking Law Services</h2>
            <div className="section-divider"></div>
            <p>
              Our banking law practice provides comprehensive legal services to
              banks, financial institutions, and corporate clients navigating
              the complex regulatory landscape of Nepal's banking sector. We
              offer strategic counsel on compliance, transactions, disputes, and
              regulatory matters.
            </p>
            <p>
              With deep expertise in banking regulations and Nepal Rastra Bank
              directives, we assist clients in achieving their business
              objectives while maintaining full regulatory compliance.
            </p>
          </div>
          <div className="content-image">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Nepal_Bank_Limited.jpg/800px-Nepal_Bank_Limited.jpg"
              alt="Banking Law"
            />
          </div>
        </div>

        {/* Key Practice Areas */}
        <div className="content-text">
          <h2>Our Banking Law Expertise</h2>
          <div className="section-divider"></div>

          <div className="highlight-box">
            <h3>Regulatory Compliance</h3>
            <p>
              Advising banks and financial institutions on compliance with Nepal
              Rastra Bank regulations, Banking Act, and related financial sector
              laws. Ensuring adherence to capital adequacy norms, anti-money
              laundering requirements, and corporate governance standards.
            </p>
          </div>

          <div className="highlight-box">
            <h3>Banking Transactions</h3>
            <p>
              Structuring and documenting complex banking transactions including
              loan agreements, security arrangements, syndicated lending,
              project finance, and cross-border transactions. Drafting
              comprehensive security documents and conducting legal due
              diligence.
            </p>
          </div>

          <div className="highlight-box">
            <h3>Licensing & Approvals</h3>
            <p>
              Assisting with bank licensing applications, branch opening
              approvals, merger and acquisition clearances, and other regulatory
              approvals from Nepal Rastra Bank and relevant authorities.
            </p>
          </div>

          <div className="highlight-box">
            <h3>Debt Recovery & Insolvency</h3>
            <p>
              Representing banks in debt recovery proceedings, enforcement of
              securities, insolvency matters, and loan restructuring. Handling
              cases before Debt Recovery Tribunals and regular courts.
            </p>
          </div>

          <div className="highlight-box">
            <h3>Banking Disputes</h3>
            <p>
              Litigation and arbitration services for banking disputes including
              breach of banking contracts, securities enforcement, guarantees,
              letters of credit, and conflicts with borrowers or third parties.
            </p>
          </div>

          <div className="highlight-box">
            <h3>Digital Banking & Fintech</h3>
            <p>
              Legal advisory on digital banking services, mobile banking,
              payment systems, fintech partnerships, data protection, and
              cybersecurity compliance in the evolving digital financial
              landscape.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="content-text" style={{ marginTop: "4rem" }}>
          <h2>Why Choose Our Banking Law Practice?</h2>
          <div className="section-divider"></div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">⚖️</div>
              <h4>Deep Expertise</h4>
              <p>
                Extensive experience in banking regulations, Nepal Rastra Bank
                directives, and financial sector compliance.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🏦</div>
              <h4>Industry Knowledge</h4>
              <p>
                In-depth understanding of banking operations, financial
                products, and regulatory requirements.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">📋</div>
              <h4>Practical Solutions</h4>
              <p>
                Business-oriented legal advice that balances regulatory
                compliance with commercial objectives.
              </p>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="content-text" style={{ marginTop: "4rem" }}>
          <h2>Comprehensive Banking Legal Services</h2>
          <div className="section-divider"></div>
          <ul>
            <li>Banking license applications and regulatory approvals</li>
            <li>Loan documentation and security arrangements</li>
            <li>Compliance with Nepal Rastra Bank regulations</li>
            <li>Anti-money laundering (AML) and KYC compliance</li>
            <li>Banking mergers, acquisitions, and restructuring</li>
            <li>Debt recovery and loan enforcement</li>
            <li>Banking litigation and dispute resolution</li>
            <li>Digital banking and payment system regulations</li>
            <li>Foreign exchange regulations and compliance</li>
            <li>Securities and collateral documentation</li>
            <li>Fintech partnerships and regulatory approvals</li>
            <li>Corporate governance for financial institutions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
