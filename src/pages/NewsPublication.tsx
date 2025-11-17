import React from "react";
import "../styles/pages.css";

export default function NewsAndPublicationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Banner */}
      <div className="page-banner">
        <div className="page-banner-content">
          <h1 className="page-banner-title">News & Publications</h1>
          <div className="page-banner-divider"></div>
          <p className="page-banner-subtitle">
            Latest Updates & Legal Insights
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="page-content-section">
        {/* News Grid */}
        <div className="news-grid">
          {/* News Item 1 */}
          <div className="news-card">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f2d93c43-1844-4fde-a59a-35f75935c73c/generated_images/professional-legal-document-with-scales--61ab09af-20251112133259.jpg"
              alt="Legal Update"
              className="news-card-image"
            />
            <div className="news-card-content">
              <div className="news-date">JANUARY 15, 2024</div>
              <h3>New Amendments to Civil Code</h3>
              <p>
                The Parliament has recently passed significant amendments to the
                Civil Code, introducing new provisions that affect property
                rights and contract law.
              </p>
              <a href="#" className="news-read-more">
                Read More →
              </a>
            </div>
          </div>

          {/* News Item 2 */}
          <div className="news-card">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f2d93c43-1844-4fde-a59a-35f75935c73c/generated_images/supreme-court-building-facade-with-gavel-c7f63c53-20251112133259.jpg"
              alt="Court Judgment"
              className="news-card-image"
            />
            <div className="news-card-content">
              <div className="news-date">JANUARY 10, 2024</div>
              <h3>Supreme Court Landmark Judgment</h3>
              <p>
                A landmark judgment by the Supreme Court has set new precedents
                regarding constitutional interpretation and fundamental rights.
              </p>
              <a href="#" className="news-read-more">
                Read More →
              </a>
            </div>
          </div>

          {/* News Item 3 */}
          <div className="news-card">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f2d93c43-1844-4fde-a59a-35f75935c73c/generated_images/corporate-law-concept-with-business-brie-65d9790d-20251112133258.jpg"
              alt="Corporate Law"
              className="news-card-image"
            />
            <div className="news-card-content">
              <div className="news-date">JANUARY 5, 2024</div>
              <h3>Corporate Law Updates</h3>
              <p>
                Recent changes to corporate governance regulations now require
                enhanced disclosure requirements for publicly traded companies.
              </p>
              <a href="#" className="news-read-more">
                Read More →
              </a>
            </div>
          </div>

          {/* News Item 4 */}
          <div className="news-card">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f2d93c43-1844-4fde-a59a-35f75935c73c/generated_images/labor-law-and-employment-rights-concept--858e3974-20251112133259.jpg"
              alt="Labor Law"
              className="news-card-image"
            />
            <div className="news-card-content">
              <div className="news-date">DECEMBER 28, 2023</div>
              <h3>Labor Law Reform Proposals</h3>
              <p>
                The Ministry has proposed comprehensive reforms to employment
                laws, focusing on worker protection and dispute resolution
                mechanisms.
              </p>
              <a href="#" className="news-read-more">
                Read More →
              </a>
            </div>
          </div>

          {/* News Item 5 */}
          <div className="news-card">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f2d93c43-1844-4fde-a59a-35f75935c73c/generated_images/intellectual-property-and-trademark-symb-3e7c1548-20251112133259.jpg"
              alt="IP Rights"
              className="news-card-image"
            />
            <div className="news-card-content">
              <div className="news-date">DECEMBER 20, 2023</div>
              <h3>Intellectual Property Rights</h3>
              <p>
                New guidelines for trademark registration and patent protection
                have been issued to align with international standards.
              </p>
              <a href="#" className="news-read-more">
                Read More →
              </a>
            </div>
          </div>

          {/* News Item 6 */}
          <div className="news-card">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/f2d93c43-1844-4fde-a59a-35f75935c73c/generated_images/tax-law-and-financial-legal-documents-ca-5a6134e8-20251112133300.jpg"
              alt="Tax Law"
              className="news-card-image"
            />
            <div className="news-card-content">
              <div className="news-date">DECEMBER 15, 2023</div>
              <h3>Tax Law Amendments</h3>
              <p>
                Important amendments to tax laws affecting both individual
                taxpayers and businesses operating in Nepal.
              </p>
              <a href="#" className="news-read-more">
                Read More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
