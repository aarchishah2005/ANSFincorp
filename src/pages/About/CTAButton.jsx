import React, { useState } from 'react';
import './WhoWeAre.css';
import { Link } from "react-router-dom";

const CTAButton = () => {
  return (
    <div>
      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h3 className="cta-title">Meet the People Behind Our Expertise</h3>
          <p className="cta-description">Our experienced team is committed to guiding you through loans, subsidies, and insurance with clarity and confidence.</p>
          <Link to="/ourteam" className="cta-button">
            Meet Our Team
            <span className="button-glow"></span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CTAButton;