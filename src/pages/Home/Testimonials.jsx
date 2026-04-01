import { Link } from 'react-router-dom';
import './Testimonials.css';
import { loadReviews } from '../../data/reviewsData';

function getInitials(name) {
  return name
    .trim()
    .split(' ')
    .map((w) => w[0]?.toUpperCase())
    .filter(Boolean)
    .slice(0, 2)
    .join('');
}

const Testimonials = () => {
  // Load from localStorage (same source as Testimonials page)
  // Show only the latest 4 reviews on the home page
  const allReviews = loadReviews();
  const reviews = allReviews.slice(0, 4);

  return (
    <div className="testimonial-section">
      <div className="testimonial-header">
        <span className="testimonial-badge">Client Reviews</span>
        <h2 className="testimonial-title">What Our Clients Say</h2>
        <p className="testimonial-subtitle">
          Real experiences from families and businesses across Surat who trust ANS Fincorp.
        </p>
      </div>

      <div className="testimonial-grid">
        {reviews.map((t) => (
          <div key={t.id} className="testimonial-card">
            <div className="t-stars">
              {[1, 2, 3, 4, 5].map((n) => (
                <span key={n} className={`t-star ${n <= t.rating ? 'filled' : ''}`}>★</span>
              ))}
            </div>
            <p className="t-text">"{t.feedback}"</p>
            <div className="t-author">
              <div className="t-avatar">{getInitials(t.name)}</div>
              <div>
                <div className="t-name">{t.name}</div>
                <div className="t-company">{t.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonial-cta">
        <Link to="/testimonials" className="testimonial-cta-btn">
          View All Reviews &amp; Share Yours
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Testimonials;
