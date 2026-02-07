import { useEffect, useRef } from "react";
import "./WhyUs.css";

const WhyUs = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: "Expert Guidance",
      description: "Professional support for loans, subsidies, and insurance with in-depth financial knowledge and proven track record.",
      color: "#0B5ED7"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M3 9h18"/>
          <path d="M9 21V9"/>
        </svg>
      ),
      title: "Government Scheme Expertise",
      description: "Specialized consultancy for MSME, Gujarat State, Central Government, and sector-based schemes with complete guidance.",
      color: "#3b82f6"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      title: "Transparent Process",
      description: "Clear documentation, honest communication, and end-to-end process support with no hidden charges or surprises.",
      color: "#fbbf24"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: "Client-First Approach",
      description: "We work closely with you to understand your unique needs and provide customized financial solutions that work.",
      color: "#0B5ED7"
    }
  ];

  return (
    <section className="why-us" ref={sectionRef}>
      {/* Background Decorations */}
      <div className="why-us-bg">
        <div className="why-bg-circle why-bg-circle-1"></div>
        <div className="why-bg-circle why-bg-circle-2"></div>
        <div className="why-bg-grid"></div>
      </div>

      <div className="why-us-container">
        {/* Section Header */}
        <div className="why-us-header">
          <span className="why-us-badge">Why Choose Us</span>
          <h2 className="why-us-title">
            Your Success is{" "}
            <span className="title-accent"> Our Priority</span>
          </h2>
          <p className="why-us-subtitle">
            Trusted by thousands of clients for reliable financial solutions, 
            transparent processes, and expert guidance every step of the way.
          </p>
        </div>

        {/* Features Grid */}
        <div className="why-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="why-card"
              ref={(el) => (cardsRef.current[index] = el)}
              style={{ "--card-color": feature.color }}
            >
              {/* Card Background Effect */}
              <div className="card-glow"></div>
              
              {/* Icon Container */}
              <div className="why-icon">
                <div className="icon-bg"></div>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="why-card-title">{feature.title}</h3>
              <p className="why-card-description">{feature.description}</p>

              {/* Decorative Element */}
              <div className="card-number">0{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;