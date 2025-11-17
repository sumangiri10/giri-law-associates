import React from "react";
import "../styles/pages.css";

<<<<<<< HEAD
export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Banner */}
      <div className="page-banner">
        <div className="page-banner-content">
          <h1 className="page-banner-title">Our Services</h1>
          <div className="page-banner-divider"></div>
        </div>
      </div>

      {/* Services Grid with Images */}
      <div
        style={{ padding: "5rem 4rem", maxWidth: "1400px", margin: "0 auto" }}
      >
        {/* Introduction */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              color: "#8B4513",
              marginBottom: "1rem",
            }}
          >
            Our Practice Areas
          </h2>
          <div
            style={{
              width: "100px",
              height: "4px",
              background: "#D4AF37",
              margin: "0 auto 1.5rem",
            }}
          ></div>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#666",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            Comprehensive legal services across all major practice areas in
            Nepal
          </p>
        </div>

        {/* Image Grid - 6 columns x 3 rows = 18 services */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "1.5rem",
          }}
        >
          {/* Service 1 */}
          <div
            style={{
              position: "relative",
              height: "220px",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop"
              alt="Civil Law"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                inset: "0",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                Civil Law
              </h3>
            </div>
          </div>

          {/* Service 2 */}
          <div
            style={{
              position: "relative",
              height: "220px",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=400&h=300&fit=crop"
              alt="Criminal Law"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                inset: "0",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                Criminal Law
              </h3>
            </div>
          </div>

          {/* Service 3 */}
          <div
            style={{
              position: "relative",
              height: "220px",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
              alt="Corporate Law"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                inset: "0",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                Corporate Law
              </h3>
            </div>
          </div>

          {/* Service 4 */}
          <div
            style={{
              position: "relative",
              height: "220px",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop"
              alt="Family Law"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                inset: "0",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                Family Law
              </h3>
            </div>
          </div>

          {/* Service 5 */}
          <div
            style={{
              position: "relative",
              height: "220px",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop"
              alt="Property Law"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                inset: "0",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                Property Law
              </h3>
            </div>
          </div>

          {/* Service 6 */}
          <div
            style={{
              position: "relative",
              height: "220px",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop"
              alt="Labour Law"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                inset: "0",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                Labour Law
              </h3>
            </div>
          </div>

          {/* Service 7 */}
          <div
            style={{
              position: "relative",
              height: "220px",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop"
              alt="Banking Law"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                inset: "0",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                Banking Law
              </h3>
            </div>
          </div>

          {/* Service 8 */}
          <div
            style={{
              position: "relative",
              height: "220px",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop"
              alt="Tax Law"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                inset: "0",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                Tax Law
              </h3>
            </div>
          </div>

          {/* Service 9 */}
          <div
            style={{
              position: "relative",
              height: "220px",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&h=300&fit=crop"
              alt="Immigration Law"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                inset: "0",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                Immigration Law
              </h3>
            </div>
          </div>

          {/* Service 10 */}
          <div
            style={{
              position: "relative",
              height: "220px",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
              alt="Intellectual Property"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                inset: "0",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                Intellectual Property
              </h3>
            </div>
          </div>

          {/* Service 11 */}
          <div
            style={{
              position: "relative",
              height: "220px",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&h=300&fit=crop"
              alt="Environmental Law"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                inset: "0",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                Environmental Law
              </h3>
            </div>
          </div>

          {/* Service 12 */}
          <div
            style={{
              position: "relative",
              height: "220px",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&h=300&fit=crop"
              alt="Constitutional Law"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                inset: "0",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                Constitutional Law
              </h3>
            </div>
          </div>

          {/* Service 13 */}
          <div
            style={{
              position: "relative",
              height: "220px",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop"
              alt="Contract Law"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                inset: "0",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                Contract Law
              </h3>
            </div>
          </div>

          {/* Service 14 */}
          <div
            style={{
              position: "relative",
              height: "220px",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop"
              alt="Insurance Law"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                inset: "0",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                Insurance Law
              </h3>
            </div>
          </div>

          {/* Service 15 */}
          <div
            style={{
              position: "relative",
              height: "220px",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop"
              alt="Cyber Law"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                inset: "0",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                Cyber Law
              </h3>
            </div>
          </div>

          {/* Service 16 */}
          <div
            style={{
              position: "relative",
              height: "220px",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
              alt="Human Rights Law"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                inset: "0",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                Human Rights Law
              </h3>
            </div>
          </div>

          {/* Service 17 */}
          <div
            style={{
              position: "relative",
              height: "220px",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop"
              alt="Consumer Protection"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                inset: "0",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                Consumer Protection
              </h3>
            </div>
          </div>

          {/* Service 18 */}
          <div
            style={{
              position: "relative",
              height: "220px",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop"
              alt="Education Law"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                inset: "0",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                Education Law
              </h3>
            </div>
          </div>
        </div>
      </div>
=======
export default function Services() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Our Services</h1>
      <p>
        Welcome to Giri Law Associates - Our Services page content coming soon.
      </p>
>>>>>>> 8c66707d9ceaddd25a10a8fd9102889caa202e47
    </div>
  );
}
