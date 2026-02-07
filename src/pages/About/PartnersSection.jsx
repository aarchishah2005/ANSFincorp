import React from 'react';
import './PartnersSection.css';
import MemberOf_1 from '../../assets/images/MemberOf/MemberOf_1.png';
import MemberOf_2 from '../../assets/images/MemberOf/MemberOf_2.png';

const PartnersSection = () => {
  // You can replace these placeholder images with your actual partner logos
  const partners = [
    {
      id: 1,
      name: 'Partner 1',
      logo: MemberOf_1,
      alt: 'Partner 1 Logo'
    },
    {
      id: 2,
      name: 'Partner 2',
      logo: MemberOf_2,
      alt: 'Partner 2 Logo'
    }
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="partners-header">
          <div className="header-accent"></div>
          <h2 className="partners-title">
            <span className="title-text">We are Member of</span>
          </h2>
        </div>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div 
              key={partner.id} 
              className="partner-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="partner-image-wrapper">
                <img 
                  src={partner.logo} 
                  alt={partner.alt}
                  className="partner-logo"
                />
                <div className="partner-overlay"></div>
              </div>
              <div className="partner-shine"></div>
            </div>
          ))}
        </div>

        <div className="partners-decorative-line"></div>
      </div>
    </section>
  );
};

export default PartnersSection;