import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

import slide1 from "../../assets/new_hero_1.png";
import slide2 from "../../assets/new_hero_2.png";
import slide4 from "../../assets/new_hero_4.png";

const slides = [
  {
    id: 1,
    type: "centered",
    image: slide1,
    badge: "Connection & Growth",
    title: "Building Your Financial Bridge",
    subtitle: "A steady path to financial success.",
    description: "We provide clear, strategic guidance to connect your present goals with a secure financial future.",
  },
  {
    id: 2,
    type: "split",
    image: slide2,
    badge: "Expert Consultation",
    title: "Your Trusted Advisors",
    subtitle: "Personalized strategies for your growth.",
    description: "Our dedicated consultants work closely with you to understand your needs and deliver tailored financial solutions.",
  },
  {
    id: 4,
    type: "image-only",
    image: slide4,
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);
  // Slider Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // 8 seconds per slide
    return () => clearInterval(timer);
  }, []);

  // --- SLIDE RENDERERS ---

  const renderFloatingSlide = (slide) => (
    <div className="layout-floating">
      <div className="slide-bg" style={{ backgroundImage: `url(${slide.image})` }}>
        <div className="overlay-gradient-left"></div>
      </div>
      <div className="slide-content">
        <div className="text-col">
          {slide.badge && <div className="hero-badge">{slide.badge}</div>}
          <h1 className="hero-title">
            {slide.title.split(' ').map((word, i, arr) =>
              i === arr.length - 1 ? <span key={i} className="text-gradient">{word}</span> : word + ' '
            )}
          </h1>
          {slide.subtitle && <h2 className="hero-subtitle">{slide.subtitle}</h2>}
          {slide.description && <p className="hero-description">{slide.description}</p>}
          {(slide.subtitle || slide.description) && (
            <div className="hero-cta-group">
              <Link to="/contact" className="btn-glow">Let's Connect</Link>
            </div>
          )}
        </div>


      </div>
    </div>
  );

  const renderCenteredSlide = (slide) => (
    <div className="layout-centered">
      <div className="slide-bg" style={{ backgroundImage: `url(${slide.image})` }}>
        <div className="overlay-dark-blue"></div>
      </div>
      <div className="slide-content centered-content">
        {slide.badge && <div className="hero-badge badge-white">{slide.badge}</div>}
        <h1 className="hero-title text-white">{slide.title}</h1>
        {slide.subtitle && <h2 className="hero-subtitle text-light-blue">{slide.subtitle}</h2>}
        {slide.description && <p className="hero-description text-gray-light">{slide.description}</p>}
        {(slide.subtitle || slide.description) && (
          <div className="hero-cta-group justify-center">
            <Link to="/contact" className="btn-glow">Discover More</Link>
            <Link to="/services" className="btn-outline-glass">Our Services</Link>
          </div>
        )}
      </div>
    </div>
  );

  const renderImageOnlySlide = (slide) => (
    <div className="layout-image-only">
      <img src={slide.image} alt="Full view" className="image-only-full" />
    </div>
  );

  const renderSplitSlide = (slide) => (
    <div className="layout-split">
      <div className="split-left">
        <div className="split-content-inner">
          <div className="hero-badge">{slide.badge}</div>
          <h1 className="hero-title">{slide.title}</h1>
          <h2 className="hero-subtitle">{slide.subtitle}</h2>
          <p className="hero-description">{slide.description}</p>
          <div className="hero-cta-group">
            <Link to="/contact" className="btn-glow">Get in Touch</Link>
          </div>
        </div>
      </div>
      <div className="split-right">
        <div className="split-image" style={{ backgroundImage: `url(${slide.image})` }}></div>
      </div>
    </div>
  );

  return (
    <section className="creative-hero-slider" ref={heroRef}>
      {slides.map((slide, index) => {
        let slideContent = null;
        if (slide.type === "floating") slideContent = renderFloatingSlide(slide);
        if (slide.type === "centered") slideContent = renderCenteredSlide(slide);
        if (slide.type === "split") slideContent = renderSplitSlide(slide);
        if (slide.type === "image-only") slideContent = renderImageOnlySlide(slide);

        return (
          <div
            key={slide.id}
            className={`hero-slide-wrapper ${index === currentSlide ? 'active' : ''} ${slide.type === 'centered' ? 'has-dark-bg' : ''}`}
          >
            {slideContent}
          </div>
        );
      })}

      <div className="hero-slider-controls">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;