import React from "react";
import "../styles/pages.css";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Banner */}
      <div className="page-banner">
        <div className="page-banner-content">
          <h1 className="page-banner-title">About Us</h1>
          <div className="page-banner-divider"></div>
          <p className="page-banner-subtitle">GIRI LAW ASSOCIATES</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="page-content-section">
        {/* Introduction Section */}
        <div className="content-grid">
          <div className="content-text">
            <h2>Welcome to Giri Law Associates</h2>
            <div className="section-divider"></div>
            <p>
              Giri Law is a premier legal service provider in Nepal, dedicated
              to delivering exceptional legal solutions with integrity,
              professionalism, and unwavering commitment to justice. Established
              with a vision to provide comprehensive legal services, we have
              grown to become one of the most trusted law firms in the country.
            </p>
            <p>
              Our firm combines deep legal expertise with a client-centered
              approach, ensuring that every case receives personalized attention
              and strategic representation. We understand that legal matters can
              be complex and overwhelming, which is why we strive to make the
              legal process as smooth and transparent as possible for our
              clients.
            </p>
          </div>
          <div className="content-image">
            <img
              src="https://assets.architecturaldigest.in/photos/600820453a9d9570bc840c0a/16:9/w_1600,c_limit/interior-design-office-space-studio-course1-1366x768.jpg"
              alt="Law firm office"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Our Mission & Vision */}
        <div className="highlight-box">
          <h3>Our Mission</h3>
          <p>
            To provide superior legal services that exceed client expectations
            while upholding the highest standards of professional ethics and
            integrity. We are committed to protecting our clients' rights and
            interests through innovative legal strategies and dedicated
            advocacy.
          </p>
        </div>

        <div className="content-grid" style={{ marginTop: "4rem" }}>
          <div className="content-image">
            <img
              src="https://www.legalsupportworld.com/wp-content/uploads/2018/11/Legal-services-blog.jpg"
              alt="Legal consultation"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="content-text">
            <h2>Our Vision</h2>
            <div className="section-divider"></div>
            <p>
              To be recognized as Nepal's leading law firm, known for excellence
              in legal practice, ethical standards, and commitment to justice.
              We envision a future where access to quality legal services is
              available to all, contributing to a more just and equitable
              society.
            </p>
            <p>
              We aim to continuously evolve with changing legal landscapes,
              incorporating modern practices while respecting traditional values
              of justice and fairness that define Nepal's legal system.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div style={{ marginTop: "5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 className="section-title">Our Core Values</h2>
            <div
              className="section-divider"
              style={{ margin: "1rem auto" }}
            ></div>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">⚖️</div>
              <h4>Integrity</h4>
              <p>
                We maintain the highest ethical standards in all our
                professional dealings, ensuring honesty and transparency with
                our clients.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h4>Excellence</h4>
              <p>
                We strive for excellence in every case, delivering superior
                legal services through thorough research and strategic planning.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h4>Client Focus</h4>
              <p>
                Our clients are at the heart of everything we do. We listen
                carefully and tailor our services to meet their unique needs.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">💼</div>
              <h4>Professionalism</h4>
              <p>
                We uphold the highest standards of professional conduct and
                maintain strict confidentiality in all client matters.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h4>Innovation</h4>
              <p>
                We embrace modern legal practices and technology to provide
                efficient and effective solutions to complex legal challenges.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h4>Commitment</h4>
              <p>
                We are deeply committed to achieving the best possible outcomes
                for our clients through dedicated representation and advocacy.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div style={{ marginTop: "5rem" }}>
          <h2 className="section-title">Why Choose Giri Law?</h2>
          <div className="section-divider"></div>
          <div className="content-grid content-grid-full">
            <div className="content-text">
              <ul>
                <li>
                  <strong>Experienced Legal Team:</strong> Our attorneys have
                  extensive experience across various practice areas of law,
                  bringing deep expertise to every case.
                </li>
                <li>
                  <strong>Comprehensive Legal Services:</strong> From corporate
                  law to civil litigation, we offer a full spectrum of legal
                  services under one roof.
                </li>
                <li>
                  <strong>Client-Centered Approach:</strong> We prioritize clear
                  communication and keep our clients informed at every stage of
                  their legal journey.
                </li>
                <li>
                  <strong>Proven Track Record:</strong> Our success is measured
                  by the positive outcomes we achieve for our clients and their
                  continued trust in our services.
                </li>
                <li>
                  <strong>Ethical Practice:</strong> We adhere strictly to
                  professional ethics and maintain the highest standards of
                  integrity in all our dealings.
                </li>
                <li>
                  <strong>Accessible and Responsive:</strong> We are committed
                  to being readily available to address our clients' concerns
                  and provide timely legal guidance.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Section */}
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

        {/* Closing Statement */}
        <div className="highlight-box" style={{ marginTop: "5rem" }}>
          <h3>Our Commitment to You</h3>
          <p>
            At Giri Law, we understand that legal issues can be stressful and
            life-changing. That's why we are committed to providing not just
            legal representation, but also support, guidance, and peace of mind.
            When you choose us, you choose a partner who will stand by your
            side, fight for your rights, and work tirelessly to achieve the best
            possible outcome for your case. Contact us today to schedule a
            consultation and experience the difference that dedicated,
            professional legal representation can make.
          </p>
        </div>
      </div>
    </div>
  );
}
