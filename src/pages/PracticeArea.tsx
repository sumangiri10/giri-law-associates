import React from "react";
import "../styles/pages.css";

<<<<<<< HEAD
const practiceAreas = [
  {
    id: 1,
    title: "Civil Law",
    description:
      "Expert representation in civil disputes, property matters, and contract negotiations.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80",
  },
  {
    id: 2,
    title: "Criminal Law",
    description:
      "Comprehensive defense services for all types of criminal cases and proceedings.",
    image:
      "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&q=80",
  },
  {
    id: 3,
    title: "Corporate Law",
    description:
      "Business formation, compliance, mergers, acquisitions, and corporate governance.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
  },
  {
    id: 4,
    title: "Family Law",
    description:
      "Sensitive handling of divorce, child custody, adoption, and family disputes.",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&q=80",
  },
  {
    id: 5,
    title: "Property Law",
    description:
      "Real estate transactions, land registration, and property dispute resolution.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
  },
  {
    id: 6,
    title: "Labor Law",
    description:
      "Employment contracts, workplace disputes, and labor rights protection.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80",
  },
  {
    id: 7,
    title: "Tax Law",
    description:
      "Tax planning, compliance, audits, and dispute resolution with authorities.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80",
  },
  {
    id: 8,
    title: "Banking Law",
    description:
      "Banking regulations, financial transactions, and loan agreements.",
    image:
      "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=400&q=80",
  },
  {
    id: 9,
    title: "Immigration Law",
    description:
      "Visa applications, work permits, citizenship, and immigration appeals.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80",
  },
  {
    id: 10,
    title: "Environmental Law",
    description:
      "Environmental compliance, impact assessments, and conservation matters.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80",
  },
  {
    id: 11,
    title: "Intellectual Property",
    description:
      "Patents, trademarks, copyrights, and IP infringement protection.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
  },
  {
    id: 12,
    title: "Contract Law",
    description:
      "Drafting, reviewing, and enforcing contracts for businesses and individuals.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80",
  },
  {
    id: 13,
    title: "Constitutional Law",
    description:
      "Constitutional rights, judicial review, and fundamental freedoms.",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&q=80",
  },
  {
    id: 14,
    title: "Commercial Law",
    description:
      "Trade agreements, commercial transactions, and business litigation.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80",
  },
  {
    id: 15,
    title: "Insurance Law",
    description: "Insurance claims, policy disputes, and coverage litigation.",
    image:
      "https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?w=400&q=80",
  },
  {
    id: 16,
    title: "Consumer Law",
    description:
      "Consumer rights protection, product liability, and unfair practices.",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&q=80",
  },
  {
    id: 17,
    title: "Cyber Law",
    description:
      "Data protection, cybercrime, digital rights, and technology regulations.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80",
  },
  {
    id: 18,
    title: "Human Rights Law",
    description:
      "Protection of fundamental rights, civil liberties, and social justice.",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&q=80",
  },
];

export default function PracticeAreaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Banner */}
      <div className="page-banner">
        <div className="page-banner-content">
          <h1 className="page-banner-title">Practice Areas</h1>
          <div className="page-banner-divider"></div>
          <p className="page-banner-subtitle">
            Comprehensive Legal Services Across Multiple Disciplines
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="page-content-section">
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Our experienced legal team provides expert services across various
            practice areas. With deep knowledge and proven track records, we are
            committed to delivering exceptional results for every client in
            every matter we handle.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="practice-area-grid">
          {practiceAreas.map((area) => (
            <div key={area.id} className="practice-area-card">
              <div className="practice-area-image-wrapper">
                <img
                  src={area.image}
                  alt={area.title}
                  className="practice-area-image"
                />
                <div className="practice-area-overlay"></div>
              </div>
              <div className="practice-area-content">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
=======
export default function PracticeArea() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Practice Area</h1>
      <p>
        Welcome to Giri Law Associates - Practice Area page content coming soon.
      </p>
>>>>>>> 8c66707d9ceaddd25a10a8fd9102889caa202e47
    </div>
  );
}
