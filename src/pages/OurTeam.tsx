import React from "react";
import "../styles/pages.css";

export default function OurTeamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Banner */}
      <div className="page-banner">
        <div className="page-banner-content">
          <h1 className="page-banner-title">Our Team</h1>
          <div className="page-banner-divider"></div>
          <p className="page-banner-subtitle">Meet Our Legal Professionals</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="page-content-section">
        {/* Introduction */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2 className="section-title">Our Legal Experts</h2>
          <div
            className="section-divider"
            style={{ margin: "1rem auto 2rem" }}
          ></div>
          <p
            className="section-subtitle"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            Our team comprises experienced attorneys dedicated to providing
            exceptional legal services. Each member brings unique expertise and
            a commitment to achieving the best outcomes for our clients.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {/* Team Member 1 */}
          <div className="team-card">
            <img
              src="https://i.ibb.co/MJhrf0C/lawyer-logo-design-template-isolated-on-white-background-vector.jpg"
              alt="Team Member"
              className="team-card-image"
            />
            <div className="team-card-content">
              <h3>Suman Giri</h3>
              <p className="team-role">Senior Partner</p>
              <p>
                Specializes in corporate law and has extensive experience in
                handling complex legal matters for businesses and organizations.
              </p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="team-card">
            <img
              src="https://i.ibb.co/MJhrf0C/lawyer-logo-design-template-isolated-on-white-background-vector.jpg"
              alt="Team Member"
              className="team-card-image"
            />
            <div className="team-card-content">
              <h3>Januk Maharjan</h3>
              <p className="team-role">Partner</p>
              <p>
                Expert in civil litigation with a proven track record of
                successful case resolutions in various courts across Nepal.
              </p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="team-card">
            <img
              src="https://i.ibb.co/MJhrf0C/lawyer-logo-design-template-isolated-on-white-background-vector.jpg"
              alt="Team Member"
              className="team-card-image"
            />
            <div className="team-card-content">
              <h3>Maanshubh Gautam</h3>
              <p className="team-role">Associate Attorney</p>
              <p>
                Focuses on family law and property disputes, providing
                compassionate and effective legal representation to clients.
              </p>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="team-card">
            <img
              src="https://i.ibb.co/MJhrf0C/lawyer-logo-design-template-isolated-on-white-background-vector.jpg"
              alt="Team Member"
              className="team-card-image"
            />
            <div className="team-card-content">
              <h3>Suman Shrestha</h3>
              <p className="team-role">Associate Attorney</p>
              <p>
                Specializes in criminal defense and has successfully defended
                clients in various high-profile criminal cases.
              </p>
            </div>
          </div>

          {/* Team Member 5 */}
          <div className="team-card">
            <img
              src="https://i.ibb.co/MJhrf0C/lawyer-logo-design-template-isolated-on-white-background-vector.jpg"
              alt="Team Member"
              className="team-card-image"
            />
            <div className="team-card-content">
              <h3>Manjil Limbu</h3>
              <p className="team-role">Legal Consultant</p>
              <p>
                Provides expert legal advice on intellectual property rights and
                technology law matters for businesses and individuals.
              </p>
            </div>
          </div>

          {/* Team Member 6 */}
          <div className="team-card">
            <img
              src="https://i.ibb.co/MJhrf0C/lawyer-logo-design-template-isolated-on-white-background-vector.jpg"
              alt="Team Member"
              className="team-card-image"
            />
            <div className="team-card-content">
              <h3>Aayush Shakya</h3>
              <p className="team-role">Legal Consultant</p>
              <p>
                Experienced in labor law and employment disputes, helping
                clients navigate complex workplace legal issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
