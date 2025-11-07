"use client";

import { useState, useEffect } from "react";
import "./HomeContent.css";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80",
    title: "Expert Legal Solutions",
    subtitle: "Professional Legal Services in Nepal",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?w=1920&q=80",
    title: "Trusted Legal Advisors",
    subtitle: "Committed to Justice and Excellence",
  },
  {
    image:
      "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=1920&q=80",
    title: "Your Legal Partner",
    subtitle: "Protecting Your Rights and Interests",
  },
];

const practiceAreas = [
  {
    title: "Civil Law",
    image:
      "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=400&q=80",
  },
  {
    title: "Criminal Law",
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80",
  },
  {
    title: "Corporate Law",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
  },
  {
    title: "Family Law",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&q=80",
  },
  {
    title: "Property Law",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
  },
  {
    title: "Labour Law",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80",
  },
  {
    title: "Banking Law",
    image:
      "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=400&q=80",
  },
  {
    title: "Tax Law",
    image:
      "https://plus.unsplash.com/premium_photo-1658506826316-f21670ec809e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRheCUyMGxhd3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
  },
  {
    title: "Immigration Law",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80",
  },
  {
    title: "Intellectual Property",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
  },
  {
    title: "Environmental Law",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80",
  },
  {
    title: "Constitutional Law",
    image:
      "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&q=80",
  },
  {
    title: "Contract Law",
    image:
      "https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?w=400&q=80",
  },
  {
    title: "Insurance Law",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
  },
  {
    title: "Cyber Law",
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&q=80",
  },
  {
    title: "Human Rights Law",
    image:
      "https://plus.unsplash.com/premium_photo-1723708807284-5fe5feb38e60?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjByaWdodHMlMjBsYXd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
  },
  {
    title: "Consumer Protection",
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=400&q=80",
  },
  {
    title: "Education Law",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80",
  },
];

const lawActs = [
  {
    id: "civil",
    title: "Civil Code 2074",
    description:
      "The Civil Code 2074 (Muluki Dewani Samhita) is the comprehensive civil law of Nepal that came into effect on August 17, 2018. It consolidates various laws related to civil matters including contracts, property, family law, succession, torts, and civil procedures. This code modernized Nepal's legal system by replacing numerous fragmented laws with a unified civil code.",
  },
  {
    id: "criminal",
    title: "Criminal Code 2074",
    description:
      "The Criminal Code 2074 (Muluki Ain) replaced the old Muluki Ain and modernized Nepal's criminal justice system. It defines various crimes, prescribes punishments, and establishes procedures for criminal proceedings. The code includes provisions for offenses against persons, property, state, public tranquility, and various other criminal matters, ensuring justice and protection of citizens' rights.",
  },
  {
    id: "constitution",
    title: "Constitution of Nepal 2072",
    description:
      "The Constitution of Nepal 2072 (2015) is the supreme law of Nepal. It establishes Nepal as a federal democratic republic and guarantees fundamental rights to all citizens. The constitution defines the structure of government, distribution of powers among federal, provincial, and local levels, and includes provisions for an independent judiciary, ensuring democratic governance and rule of law.",
  },
  {
    id: "company",
    title: "Company Act 2063",
    description:
      "The Company Act 2063 (2006) regulates the incorporation, management, and dissolution of companies in Nepal. It provides the legal framework for different types of companies including private limited, public limited, and non-profit organizations. The act governs corporate governance, shareholder rights, director responsibilities, and ensures transparency in business operations.",
  },
  {
    id: "labour",
    title: "Labour Act 2074",
    description:
      "The Labour Act 2074 (2017) is the primary legislation governing employment relationships in Nepal. It establishes rights and obligations of employers and employees, covers working conditions, wages, leave entitlements, occupational safety, social security, and dispute resolution mechanisms. The act aims to protect workers' rights while promoting harmonious industrial relations.",
  },
  {
    id: "evidence",
    title: "Evidence Act 2031",
    description:
      "The Evidence Act 2031 (1974) establishes rules regarding the admissibility, relevance, and burden of proof in legal proceedings. It defines what constitutes evidence, how evidence should be presented in court, and the weight given to different types of evidence. This act is fundamental to ensuring fair trials and proper administration of justice in Nepal's legal system.",
  },
];

export default function HomeContent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("civil");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const activeLawAct =
    lawActs.find((act) => act.id === activeTab) || lawActs[0];

  return (
    <div className="home-container">
      {/* Hero Carousel */}
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={slide.image} alt={slide.title} className="slide-image" />
            <div className="slide-overlay" />
            <div className="slide-content">
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-subtitle">{slide.subtitle}</p>
            </div>
          </div>
        ))}

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`dot ${index === currentSlide ? "active" : ""}`}
            />
          ))}
        </div>
      </div>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-container">
          <h2 className="section-title">Welcome to Our Law Firm!</h2>
          <div className="section-divider"></div>
          <p className="welcome-text">
            We are a leading law firm in Nepal, dedicated to providing
            exceptional legal services with integrity, professionalism, and
            commitment to justice. Our team of experienced attorneys specializes
            in various areas of law, ensuring comprehensive legal solutions for
            individuals and businesses alike.
          </p>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Cases Won</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">25+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">98%</div>
              <div className="stat-label">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="why-container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="section-divider"></div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚖️</div>
              <h3>Expert Legal Team</h3>
              <p>
                Highly qualified and experienced attorneys dedicated to your
                case
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Client-Focused Approach</h3>
              <p>
                Personalized attention and tailored legal strategies for each
                client
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Proven Track Record</h3>
              <p>Consistently achieving favorable outcomes for our clients</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Trusted Partnership</h3>
              <p>
                Building long-term relationships based on trust and excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="practice-section">
        <div className="practice-container">
          <h2 className="section-title">Our Practice Areas</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Comprehensive legal services across all major areas of law
          </p>

          <div className="practice-grid">
            {practiceAreas.map((area, index) => (
              <div key={index} className="practice-card">
                <div className="practice-image-wrapper">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="practice-image"
                  />
                  <div className="practice-overlay">
                    <h3 className="practice-title">{area.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nepal Law Acts */}
      <section className="acts-section">
        <div className="acts-container">
          <h2 className="section-title">Acts of Nepal</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Explore the comprehensive legal framework of Nepal. Our expertise
            spans across all major acts and regulations that govern the legal
            landscape of the country.
          </p>

          <div className="tabs-container">
            <div className="tabs-buttons">
              {lawActs.map((act) => (
                <button
                  key={act.id}
                  onClick={() => setActiveTab(act.id)}
                  className={`tab-button ${
                    activeTab === act.id ? "active" : ""
                  }`}
                >
                  {act.title}
                </button>
              ))}
            </div>

            <div className="tab-content">
              <h3 className="act-title">{activeLawAct.title}</h3>
              <p className="act-description">{activeLawAct.description}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
