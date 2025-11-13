import React from "react";
import "../styles/pages.css";

export default function JoinUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Banner */}
      <div className="page-banner">
        <div className="page-banner-content">
          <h1 className="page-banner-title">Join Us</h1>
          <div className="page-banner-divider"></div>
          <p className="page-banner-subtitle">
            Build Your Legal Career With Us
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="page-content-section">
        {/* Introduction */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 className="section-title">Career Opportunities</h2>
          <div
            className="section-divider"
            style={{ margin: "1rem auto 2rem" }}
          ></div>
          <p
            className="section-subtitle"
            style={{ maxWidth: "900px", margin: "0 auto", fontSize: "1.1rem" }}
          >
            We are always looking for talented, dedicated legal professionals to
            join our team. If you are passionate about law and committed to
            excellence, we invite you to explore career opportunities with our
            firm.
          </p>
        </div>

        {/* Why Join Us */}
        <div className="highlight-box">
          <h3>Why Work With Us</h3>
          <p>
            Our firm offers a dynamic and supportive work environment where
            legal professionals can grow their careers while making meaningful
            contributions to our clients' success. We value integrity,
            collaboration, and continuous learning, providing opportunities for
            professional development and advancement.
          </p>
        </div>

        {/* Open Positions */}
        <div style={{ marginTop: "5rem" }}>
          <h2 className="section-title">Current Openings</h2>
          <div
            className="section-divider"
            style={{ margin: "1rem auto 3rem" }}
          ></div>

          <div className="services-list">
            <div className="service-item">
              <h3>Associate Attorney</h3>
              <p>
                We are seeking experienced associates with strong litigation and
                legal research skills. Candidates should have a law degree and
                bar registration in Nepal.
              </p>
            </div>

            <div className="service-item">
              <h3>Legal Intern</h3>
              <p>
                Internship opportunities available for law students seeking
                practical experience in various practice areas. Gain hands-on
                experience working on real cases.
              </p>
            </div>

            <div className="service-item">
              <h3>Paralegal</h3>
              <p>
                Looking for detail-oriented paralegals to assist with case
                preparation, legal research, and client communication. Prior
                experience preferred.
              </p>
            </div>

            <div className="service-item">
              <h3>Legal Secretary</h3>
              <p>
                Organized and efficient legal secretary needed to manage
                administrative tasks, scheduling, and client correspondence.
                Proficiency in legal documentation required.
              </p>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div style={{ marginTop: "5rem" }}>
          <h2 className="section-title">How to Apply?</h2>
          <div
            className="section-divider"
            style={{ margin: "1rem auto 3rem" }}
          ></div>

          <div
            className="content-text"
            style={{ maxWidth: "900px", margin: "0 auto" }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                marginBottom: "2rem",
              }}
            >
              If you are interested in joining our team, please submit your
              application including:
            </p>

            <ul style={{ marginBottom: "2rem" }}>
              <li>Current CV/Resume</li>
              <li>Cover letter explaining your interest and qualifications</li>
              <li>
                Copies of academic certificates and bar registration (if
                applicable)
              </li>
              <li>
                Contact information for at least two professional references
              </li>
            </ul>

            <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
              Send your application materials to{" "}
              <strong>careers@girilawfirm.com.np</strong> with the position
              title in the subject line. We review applications on a rolling
              basis and will contact qualified candidates for interviews.
            </p>
          </div>
        </div>

        {/* Contact Box */}
        <div className="highlight-box" style={{ marginTop: "4rem" }}>
          <h3>Questions About Careers?</h3>
          <p>
            For inquiries about career opportunities, internships, or the
            application process, please contact our human resources department
            at <strong>+977 9864244422</strong> or email us at{" "}
            <strong>careers@girilawfirm.com.np</strong>. We look forward to
            hearing from you.
          </p>
        </div>
      </div>
    </div>
  );
}
