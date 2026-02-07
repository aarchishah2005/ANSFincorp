import React, { useState } from 'react';
import './WhoWeAre.css';
import PartnersSection from './PartnersSection';
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: '💰',
      title: 'Loan Consultancy',
      description: 'From project financing to home loans, we connect you with the right lenders and ensure smooth loan processing from application to disbursement.',
      color: '#FF6B35',
      path: '/services'
    },
    {
      id: 2,
      icon: '🎯',
      title: 'Subsidy Advisory',
      description: 'Expert guidance on Central and State government subsidies, including MSME schemes, solar subsidies, and sector-specific benefits.',
      color: '#4ECDC4',
      path: '/services'
    },
    {
      id: 3,
      icon: '🛡️',
      title: 'Insurance Solutions',
      description: 'Comprehensive coverage options for life, health, business, and assets – protecting what matters most to you.',
      color: '#5B8BDF',
      path: '/services'
    }
  ];

  return (
    <div className="ans-container">
      {/* Animated Background Elements */}
      <div className="background-decoration">
        <div className="shape shape-circle-1"></div>
        <div className="shape shape-circle-2"></div>
        <div className="shape shape-triangle"></div>
        <div className="shape shape-square"></div>
        <div className="shape shape-hexagon"></div>
      </div>

      {/* Who We Are Section */}
      <section className="who-we-are-section">
        <div className="content-wrapper">
          <div className="section-header">
            <div className="header-decoration"></div>
            <h1 className="section-title">
              Who We Are
              <span className="title-underline"></span>
            </h1>
          </div>

          <div className="intro-content">
            <p className="intro-text highlight-text">
              ANS Fincorp is a trusted financial services firm offering expert assistance in loans, government subsidies, and insurance solutions. We specialize in simplifying complex financial processes by providing end-to-end support—from documentation to final approvals.
            </p>
            <p className="intro-text highlight-text">
              With a client-first approach and strong banking partnerships, we ensure transparency, efficiency, and reliability at every step. Trusted by many, we are committed to supporting individual and business growth with clarity, confidence, and integrity.
            </p>
          </div>


        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do-section">
        <div className="content-wrapper">
          <div className="section-header">
            <div className="header-decoration"></div>
            <h2 className="section-title">
              What We Do
              <span className="title-underline"></span>
            </h2>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`service-card ${hoveredCard === service.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="card-background" style={{ backgroundColor: service.color }}></div>

                <div className="card-content">
                  <div className="icon-wrapper">
                    <span className="service-icon">{service.icon}</span>
                    <div className="icon-glow" style={{ backgroundColor: service.color }}></div>
                  </div>

                  <h3 className="service-title">{service.title}</h3>

                  <p className="service-description">{service.description}</p>

                  <div className="card-footer">
                    <Link
                      to={service.path}
                      className="learn-more-btn"
                      style={{ color: service.color }}
                    >
                      Learn More
                      <svg
                        className="arrow-icon"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M7.5 15L12.5 10L7.5 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className="card-shine"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* We are Member of */}
      <PartnersSection />
    </div>
  );
};

export default WhoWeAre;