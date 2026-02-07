import React from 'react';
import './TeamPage.css';
import BhavinShah from '../../assets/images/OurTeam/BhavinShah.jpeg';
import NehalShah from '../../assets/images/OurTeam/NehalShah.jpg';

const TeamPage = () => {
  const coreManagement = [
    {
      name: 'Bhavin Shah',
      role: 'Founder',
      image: BhavinShah,
      description: 'I\'m founder of both, my two love birds & thereafter of damupurmoney.com i.e wealth, rich client business. We are silent warriors in action and is steadily in create a niche in debt and wealth market business, specialized financial services from mutual to billion, consumer to corporates-we build relationship larger, as we think and we ARE SPECIALIZED IN RISK, we believe in every important the quality to becomes success in the world of debt'
    },
    {
      name: 'Nehal Shah',
      role: 'Advisor',
      image: NehalShah
    }
  ];

  const OfficeTeam = [
    {
      name: 'Jitedra Jariwala',
      role: 'Manager',
      image: '/api/placeholder/120/120'
    }
  ];

  return (
    <div className="team-page">
      {/* Core Management Team */}
      <section className="team-section">
        <h2 className="section-title">Leadership Team</h2>
        <div className="team-grid core-management">
          {coreManagement.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h4 className="member-name-small">{member.name}</h4>
              <p className="member-role-small">{member.role}</p>
            </div>
          ))}
        </div>
        <div className="member-details">
          <h3 className="member-name">{coreManagement[0].name} <span className="member-role">{coreManagement[0].role}</span></h3>
          <p className="member-description">{coreManagement[0].description}</p>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="team-section">
        <h2 className="section-title">ANSFincorp Team</h2>
        <div className="team-grid leadership-team">
          {OfficeTeam.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h4 className="member-name-small">{member.name}</h4>
              <p className="member-role-small">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamPage;