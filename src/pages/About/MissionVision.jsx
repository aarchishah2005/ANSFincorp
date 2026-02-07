import React, { useState } from 'react';
import './MissionVision.css';

const MissionVision = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="mission-vision-section">
      <div className="mv-container">
        
        {/* Vision and Mission Cards */}
        <div className="vm-cards-wrapper">
          <div className="vm-card vision-card">
            <div className="vm-card-header">
              <div className="vm-icon-wrapper vision-icon">
                <span className="vm-icon">🎯</span>
              </div>
              <h2 className="vm-title">Our Vision</h2>
            </div>
            <p className="vm-description">
              Our vision is to evolve as a forward thinking consulting enterprise, 
              empowering businesses with reliable financial direction and purpose 
              driven solutions, while maintaining excellence, trust and adaptability.
            </p>
            <div className="vm-decoration vision-decoration"></div>
          </div>

          <div className="vm-card mission-card">
            <div className="vm-card-header">
              <div className="vm-icon-wrapper mission-icon">
                <span className="vm-icon">🚀</span>
              </div>
              <h2 className="vm-title">Our Mission</h2>
            </div>
            <p className="vm-description">
              To simplify complex financial processes by offering all essential 
              services under one roof, saving time, efforts and cost for our clients.
            </p>
            <div className="vm-decoration mission-decoration"></div>
          </div>
        </div>
      </div>
      {/* Floating Background Elements */}
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default MissionVision;