import { useState, useEffect, useRef } from "react";
import "./TestimonialsPage.css";
import { loadReviews, saveReviews, deleteReview } from "../../data/reviewsData";

const ADMIN_PASSWORD = "BNAS123";

function getInitials(name) {
  return name
    .trim()
    .split(" ")
    .map((w) => w[0]?.toUpperCase())
    .filter(Boolean)
    .slice(0, 2)
    .join("");
}

function StarDisplay({ count }) {
  return (
    <div className="tp-stars-display">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={`tp-star-icon ${n <= count ? "filled" : ""}`}>
          ★
        </span>
      ))}
    </div>
  );
}

/* Animated counter hook */
function useCountUp(target, duration = 1200) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  useEffect(() => {
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((ease * target).toFixed(1)));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);
  return value;
}

const TestimonialsPage = () => {
  const [reviews, setReviews] = useState(loadReviews);
  const [newestId, setNewestId] = useState(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [visibleCards, setVisibleCards] = useState(new Set());

  // Admin state
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminInput, setShowAdminInput] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [adminError, setAdminError] = useState("");

  // Form state
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formFocused, setFormFocused] = useState(false);

  const avgRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      : 0;

  const countedAvg = useCountUp(avgRating);
  const countedTotal = useCountUp(reviews.length, 1000);

  // Intersection observer for card reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, e.target.dataset.id]));
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".tp-review-card[data-id]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return setError("Please enter your name.");
    if (!feedback.trim()) return setError("Please write your feedback.");
    if (!rating) return setError("Please select a star rating.");

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      company: company.trim() || "ANS Fincorp Client",
      feedback: feedback.trim(),
      rating,
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    saveReviews(updated);
    setNewestId(newReview.id);
    setTimeout(() => setNewestId(null), 4000);

    setName(""); setCompany(""); setFeedback(""); setRating(0); setError("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPassword === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setShowAdminInput(false);
      setAdminPassword("");
      setAdminError("");
    } else {
      setAdminError("Incorrect password.");
      setAdminPassword("");
    }
  };

  const handleConfirmDelete = () => {
    const updated = deleteReview(reviews, confirmDeleteId);
    setReviews(updated);
    setConfirmDeleteId(null);
  };

  return (
    <section className="tp-page">

      {/* ── Ambient Background ── */}
      <div className="tp-ambient" aria-hidden="true">
        <div className="tp-orb tp-orb-1" />
        <div className="tp-orb tp-orb-2" />
        <div className="tp-orb tp-orb-3" />
        <div className="tp-grid-lines" />
      </div>

      {/* ── Delete Confirmation Modal ── */}
      {confirmDeleteId && (
        <div className="tp-modal-overlay">
          <div className="tp-modal">
            <div className="tp-modal-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3>Delete this review?</h3>
            <p>This action cannot be undone. The review will be permanently removed.</p>
            <div className="tp-modal-actions">
              <button className="tp-modal-cancel" onClick={() => setConfirmDeleteId(null)}>Cancel</button>
              <button className="tp-modal-confirm" onClick={handleConfirmDelete}>Yes, Delete</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Page Header ── */}
      <header className="tp-header">
        <span className="tp-eyebrow">
          <span className="tp-eyebrow-dot" />
          Client Reviews
        </span>
        <h1 className="tp-headline">
          <span className="tp-headline-line">What Our Clients</span>
          <span className="tp-headline-line tp-headline-accent">Say About Us</span>
        </h1>
        <p className="tp-subhead">
          Real experiences from real clients. See why families and businesses
          across Surat trust ANS Fincorp for their financial journey.
        </p>

        <div className="tp-stats">
          <div className="tp-stat">
            <span className="tp-stat-number">{Math.floor(countedTotal)}+</span>
            <span className="tp-stat-label">Happy Clients</span>
          </div>
          <div className="tp-stat-sep" />
          <div className="tp-stat">
            <span className="tp-stat-number">{countedAvg.toFixed(1)}</span>
            <span className="tp-stat-label">Avg Rating</span>
          </div>
          <div className="tp-stat-sep" />
          <div className="tp-stat">
            <span className="tp-stat-number">5★</span>
            <span className="tp-stat-label">Rated Service</span>
          </div>
        </div>
      </header>

      <div className="tp-container">

        {/* ══════════════════════════════
            SECTION 1 — REVIEWS GRID
        ══════════════════════════════ */}
        <div className="tp-reviews-section">
          <div className="tp-section-label">
            <span className="tp-section-line" />
            <span>Client Testimonials</span>
            <span className="tp-section-count">{reviews.length}</span>
          </div>

          {isAdmin && (
            <p className="tp-admin-notice">
              🔓 Admin mode — delete buttons visible
            </p>
          )}

          <div className="tp-reviews-grid">
            {reviews.map((r, i) => (
              <article
                key={r.id}
                data-id={String(r.id)}
                className={[
                  "tp-review-card",
                  r.id === newestId ? "tp-new-card" : "",
                  visibleCards.has(String(r.id)) ? "tp-card-visible" : "",
                ].join(" ")}
                style={{ "--delay": `${(i % 6) * 80}ms` }}
              >
                <div className="tp-card-quote">"</div>

                {isAdmin && (
                  <button
                    className="tp-delete-btn"
                    onClick={() => setConfirmDeleteId(r.id)}
                    title="Delete review"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                )}

                {r.id === newestId && <span className="tp-new-badge">Just added ✨</span>}

                <StarDisplay count={r.rating} />
                <p className="tp-review-text">{r.feedback}</p>

                <div className="tp-review-author">
                  <div className="tp-avatar">
                    <span>{getInitials(r.name)}</span>
                  </div>
                  <div>
                    <div className="tp-author-name">{r.name}</div>
                    <div className="tp-author-company">{r.company}</div>
                  </div>
                </div>

                <div className="tp-card-shimmer" />
              </article>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════
            SECTION 2 — SUBMIT FORM
        ══════════════════════════════ */}
        <div className="tp-form-section">
          <div className="tp-section-label">
            <span className="tp-section-line" />
            <span>Share Your Experience</span>
          </div>

          <div className={`tp-form-card ${formFocused ? "tp-form-active" : ""}`}>
            <div className="tp-form-deco" aria-hidden="true">
              <span className="tp-form-deco-num">01</span>
              <span className="tp-form-deco-text">Your Review</span>
            </div>

            <form onSubmit={handleSubmit} className="tp-form">
              <div className="tp-form-row">
                <div className="tp-form-group">
                  <label htmlFor="tp-name">
                    Your Name <span className="tp-required">*</span>
                  </label>
                  <input
                    id="tp-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => setFormFocused(true)}
                    placeholder="e.g. Rahul Sharma"
                    maxLength={50}
                  />
                </div>
                <div className="tp-form-group">
                  <label htmlFor="tp-company">Company / Occupation</label>
                  <input
                    id="tp-company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Business Owner"
                    maxLength={60}
                  />
                </div>
              </div>

              <div className="tp-form-group">
                <label htmlFor="tp-feedback">
                  Your Feedback <span className="tp-required">*</span>
                </label>
                <textarea
                  id="tp-feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Tell others about your experience with ANS Fincorp..."
                  maxLength={400}
                  rows={4}
                />
                <span className="tp-char-count">
                  <span style={{ color: feedback.length > 360 ? "#e63c3c" : "inherit" }}>
                    {feedback.length}
                  </span>/400
                </span>
              </div>

              <div className="tp-form-group">
                <label>Rating <span className="tp-required">*</span></label>
                <div className="tp-star-picker">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span
                      key={n}
                      className={`tp-star-pick ${n <= (hovered || rating) ? "active" : ""}`}
                      onClick={() => setRating(n)}
                      onMouseEnter={() => setHovered(n)}
                      onMouseLeave={() => setHovered(0)}
                    >★</span>
                  ))}
                  {rating > 0 && (
                    <span className="tp-rating-text">
                      {["", "Poor", "Fair", "Good", "Very Good", "Excellent"][rating]}
                    </span>
                  )}
                </div>
              </div>

              {error && <p className="tp-error">{error}</p>}

              <button type="submit" className={`tp-submit-btn ${submitted ? "tp-success" : ""}`}>
                {submitted ? (
                  <>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Review Submitted!
                  </>
                ) : (
                  <>
                    Submit Your Review
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="18" height="18">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* ══════════════════════════════
          HIDDEN ADMIN — bottom of page
          Invisible dot, only visible on hover
      ══════════════════════════════ */}
      <div className="tp-admin-zone">
        {!isAdmin ? (
          <>
            <button
              className="tp-admin-dot"
              onClick={() => setShowAdminInput((v) => !v)}
              aria-label="Admin"
            />
            {showAdminInput && (
              <form onSubmit={handleAdminLogin} className="tp-admin-form">
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => { setAdminPassword(e.target.value); setAdminError(""); }}
                  placeholder="Admin password"
                  className="tp-admin-input"
                  autoFocus
                />
                <button type="submit" className="tp-admin-submit">Unlock</button>
                {adminError && <span className="tp-admin-error">{adminError}</span>}
              </form>
            )}
          </>
        ) : (
          <button className="tp-admin-logout" onClick={() => { setIsAdmin(false); setShowAdminInput(false); }}>
            Exit Admin Mode
          </button>
        )}
      </div>

    </section>
  );
};

export default TestimonialsPage;