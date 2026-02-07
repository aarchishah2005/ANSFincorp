import { Link } from "react-router-dom";
import { useState } from "react";
import "./ServicesOverview.css";

const ServicesOverview = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="services-overview">
      {/* Animated Background Elements */}
      <div className="background-elements">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="services-container">
        {/* Section Header */}
        <div className="services-header">
          <span className="header-tag">What We Offer</span>
          <h2 className="services-title">
            Empowering Your
            <span className="title-highlight"> Financial Growth</span>
          </h2>
          <p className="services-subtitle">
            Comprehensive solutions tailored to accelerate your business success
            and secure your future
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {/* Loans Card */}
          <div
            className={`service-card ${
              hoveredCard === "loans" ? "card-hovered" : ""
            }`}
            onMouseEnter={() => setHoveredCard("loans")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="icon-wrapper">
                <svg
                  className="service-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="icon-bg icon-bg-loans"></div>
              </div>

              <h3 className="service-title">Loans</h3>
              <p className="service-description">
                Complete consultancy for project loans, machinery loans, and working
                capital solutions. Navigate the funding landscape with expert guidance.
              </p>

              <ul className="service-features">
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Project Financing
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Machinery Loans
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Working Capital
                </li>
              </ul>

              <Link to="/services" className="service-link service-link-loans">
                <span>Explore Loans</span>
                <svg
                  className="link-arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Subsidy Card */}
          <div
            className={`service-card ${
              hoveredCard === "subsidy" ? "card-hovered" : ""
            }`}
            onMouseEnter={() => setHoveredCard("subsidy")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="icon-wrapper">
                <svg
                  className="service-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C13.6569 21 15 16.9706 15 12C15 7.02944 13.6569 3 12 3M12 21C10.3431 21 9 16.9706 9 12C9 7.02944 10.3431 3 12 3M3 12C3 7.02944 7.02944 3 12 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="icon-bg icon-bg-subsidy"></div>
              </div>

              <h3 className="service-title">Subsidy</h3>
              <p className="service-description">
                Expert assistance in securing government subsidies and grants. 
                Maximize your benefits with our comprehensive subsidy consulting services.
              </p>

              <ul className="service-features">
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Government Grants
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Subsidy Applications
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Benefit Optimization
                </li>
              </ul>

              <Link to="/services" className="service-link service-link-subsidy">
                <span>Explore Subsidy</span>
                <svg
                  className="link-arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Insurance Solutions Card */}
          <div
            className={`service-card ${
              hoveredCard === "insurance" ? "card-hovered" : ""
            }`}
            onMouseEnter={() => setHoveredCard("insurance")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="card-glow"></div>
            <div className="card-content">
              <div className="icon-wrapper">
                <svg
                  className="service-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="icon-bg icon-bg-insurance"></div>
              </div>

              <h3 className="service-title">Insurance</h3>
              <p className="service-description">
                Protect your life, business, and assets with our tailored
                insurance advisory services. Comprehensive coverage designed for
                your peace of mind.
              </p>

              <ul className="service-features">
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Life & Health Coverage
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Business Protection
                </li>
                <li>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Asset Security
                </li>
              </ul>

              <Link to="/services" className="service-link service-link-insurance">
                <span>Explore Insurance</span>
                <svg
                  className="link-arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;