import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import "./Hero.css";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = canvas.offsetHeight;

    // Floating financial particles
    const particles = [];
    const particleCount = 40;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      
      {/* Decorative geometric elements */}
      <div className="hero-decoration">
        <div className="deco-circle deco-circle-1"></div>
        <div className="deco-circle deco-circle-2"></div>
        <div className="deco-square"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="badge-icon">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
          </svg>
          <span>Trusted by 50+ Happy Clients</span>
        </div>

        <h1 className="hero-title">
          Your Trusted Bridge to Better Finance
        </h1>

        <div className="hero-services">
          <div className="service-tag">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Loans</span>
          </div>
          <div className="service-tag">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Subsidy</span>
          </div>
          <div className="service-tag">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>Insurance</span>
          </div>
        </div>

        <p className="hero-description">
          Supporting individuals and businesses with reliable financial solutions 
          tailored to your unique needs and aspirations.
        </p>

        <div className="hero-buttons">
          <Link to="/contact" className="btn btn-primary">
            <span>Apply for Loan</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link to="/contact" className="btn btn-outline">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Talk to Expert</span>
          </Link>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">₹50+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">₹1500Cr+</div>
            <div className="stat-label">Loans Processed</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;