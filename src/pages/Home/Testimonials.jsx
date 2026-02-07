import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const testimonialData = [
  {
    text: "ANS Fincorp made the entire loan process smooth and stress-free. From documentation to final approval, everything was handled professionally and transparently. We truly felt supported at every step.",
    name: "Aarchi Shah"
  },
  {
    text: "What we appreciated most about ANS Fincorp was their clear guidance and honest advice. They explained all options patiently and helped us choose the best solution for our financial needs.",
    name: "Vini Patel"
  },
  {
    text: "Thanks to ANS Fincorp, our loan was approved faster than expected. Their team is responsive, knowledgeable, and always ready to help. Highly reliable service.",
    name: "Swayam Shah"
  },
  {
    text: "ANS Fincorp stands out for their personal attention and commitment. They didn’t treat us like just another client but genuinely worked in our best interest.",
    name: "Nehal Shah"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prevIndex) => 
          prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
        );
        setTransitioning(false);
      }, 600); // Match animation duration
    }, 4000); // Auto-change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">Testimonials</h2>
      
      <div className="carousel-container">
        <div className="carousel-inner">
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === activeIndex ? (transitioning ? "exiting" : "active") : ""
              }`}
              style={{ position: index === activeIndex ? 'relative' : 'absolute' }}
            >
              <blockquote>
                <p className="testimonial-text">{testimonial.text}</p>
                <footer className="testimonial-footer">
                  <div className="testimonial-name">{testimonial.name}</div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
