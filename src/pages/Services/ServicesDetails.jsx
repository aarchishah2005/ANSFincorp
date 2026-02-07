import React, { useState } from 'react';
import './Services.css';

const ServicesDetails = () => {
  const [activeTab, setActiveTab] = useState('services');

  const services = [
    { 
      icon: '⚙️', 
      name: 'Machinery Loan', 
      description: 'Competitive financing solutions for industrial equipment and machinery acquisition' 
    },
    { 
      icon: '📊', 
      name: 'Project Loan', 
      description: 'Comprehensive funding for large-scale business expansion and infrastructure projects' 
    },
    { 
      icon: '💼', 
      name: 'Cash Credit', 
      description: 'Flexible working capital facilities to maintain smooth business operations' 
    },
    { 
      icon: '🏦', 
      name: 'Overdraft Facility', 
      description: 'Short-term credit solutions for managing cash flow requirements' 
    },
    { 
      icon: '🏢', 
      name: 'Mortgage Loan', 
      description: 'Property-backed financing for commercial and business real estate' 
    },
    { 
      icon: '🏠', 
      name: 'Home Loan', 
      description: 'Affordable residential property financing with flexible repayment options' 
    },
    { 
      icon: '📋', 
      name: 'Project Report', 
      description: 'Detailed feasibility studies and comprehensive project analysis services' 
    },
    { 
      icon: '🛡️', 
      name: 'General Insurance', 
      description: 'Complete asset protection and liability coverage for businesses' 
    },
    { 
      icon: '👥', 
      name: 'Life Insurance', 
      description: 'Comprehensive life protection and financial security planning' 
    },
    { 
      icon: '🏭', 
      name: 'Factory Insurance', 
      description: 'Specialized coverage for industrial facilities and manufacturing units' 
    },
    { 
      icon: '🚗', 
      name: 'Motor Insurance', 
      description: 'Complete vehicle protection plans for commercial and personal use' 
    },
    { 
      icon: '⚕️', 
      name: 'Health Insurance', 
      description: 'Comprehensive medical coverage and healthcare benefit solutions' 
    },
    { 
      icon: '📈', 
      name: 'Mutual Funds', 
      description: 'Strategic investment opportunities for long-term wealth creation' 
    },
    { 
      icon: '🔬', 
      name: 'TEV Report', 
      description: 'Technical evaluation and valuation reports for project assessment' 
    }
  ];

  const industries = [
    { 
      icon: '🧵', 
      name: 'Textile & Garments', 
      description: 'Manufacturing, processing, and export of textile products' 
    },
    { 
      icon: '☀️', 
      name: 'Solar Energy', 
      description: 'Renewable energy solutions and solar power generation systems' 
    },
    { 
      icon: '🔧', 
      name: 'Plastics & Polymers', 
      description: 'Polymer manufacturing and plastic products processing' 
    },
    { 
      icon: '⚗️', 
      name: 'Chemical & Pharma', 
      description: 'Pharmaceutical manufacturing and chemical processing industries' 
    },
    { 
      icon: '🍴', 
      name: 'Food Processing', 
      description: 'Food manufacturing, packaging, and agro-processing sector' 
    },
    { 
      icon: '♻️', 
      name: 'Bio-Gas & Renewable', 
      description: 'Alternative energy production and sustainable fuel solutions' 
    },
    { 
      icon: '🏗️', 
      name: 'Cement & Construction', 
      description: 'Building materials and construction industry solutions' 
    }
  ];

  const activeData = activeTab === 'services' ? services : industries;

  return (
    <div className="services-container">
      <div className="services-hero">
        <div className="hero-accent"></div>
        <h1 className="services-title">
          <span className="title-gradient">Our Expertise</span>
        </h1>
        <p className="services-subtitle">
          Professional financial solutions and industry-specific consultancy services
        </p>
      </div>

      <div className="tab-switcher">
        <button 
          className={`tab-btn ${activeTab === 'services' ? 'active' : ''}`}
          onClick={() => setActiveTab('services')}
        >
          Financial Services
        </button>
        <button 
          className={`tab-btn ${activeTab === 'industry' ? 'active' : ''}`}
          onClick={() => setActiveTab('industry')}
        >
          Industry Sectors
        </button>
        <div className={`tab-indicator ${activeTab === 'industry' ? 'right' : ''}`}></div>
      </div>

      <div className="services-grid">
        {activeData.map((item, index) => (
          <div 
            key={index} 
            className="service-card"
          >
            <div className="card-icon">{item.icon}</div>
            <h3 className="card-title">{item.name}</h3>
            <p className="card-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesDetails;