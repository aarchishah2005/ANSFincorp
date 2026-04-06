import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const web3formsKey = "YOUR_WEB3FORMS_ACCESS_KEY"; // Replace with your actual key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3formsKey,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to: "ansfincorp@gmail.com",
          from_name: "ANS Fincorp Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">

      {/* ── HERO ── */}
      <section className="contact-hero">
        <div className="hero-grid-lines" />
        <div className="hero-glow" />
        <div className="contact-hero-inner">
          <div className="hero-pill">
            <span className="hero-pill-dot" />
            ANS Fincorp
          </div>
          <h1>
            Let's Start a <em>Conversation</em>
          </h1>
          <p>
            Expert financial guidance is just a message away. Our team is ready to
            help you navigate loans, subsidies, and insurance solutions.
          </p>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="wave-wrap">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" height="60">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* ── CONTACT DETAILS SECTION ── */}
      <section className="contact-details-section">
        <p className="section-label">Reach Us</p>
        <div className="details-cards">
          {/* Location */}
          <div className="detail-card">
            <div className="card-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3>Visit Our Office</h3>
            <p>
              U-7, Someshwar Square, Opp. Aagam Heritage,<br />
              Nr. Someshwar Banglaw, University Road,<br />
              Surat, Gujarat – 395001
            </p>
            <span className="card-tag">Open Mon – Sat</span>
          </div>

          {/* Phone */}
          <div className="detail-card">
            <div className="card-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3>Call Us Anytime</h3>
            <p>
              <a href="tel:+916358849229">+91 63588 49229</a>
            </p>
            <span className="card-tag">9:00 AM – 7:00 PM</span>
          </div>

          {/* Email */}
          <div className="detail-card">
            <div className="card-icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3>Email Us</h3>
            <p>
              <a href="mailto:ansfincorp@gmail.com">ansfincorp@gmail.com</a>
            </p>
            <span className="card-tag">Reply within 24 hours</span>
          </div>
        </div>
      </section>

      {/* ── SECTION DIVIDER ── */}
      <div className="section-divider">
        <div className="divider-line" />
        <span className="divider-badge">Send Us a Message</span>
        <div className="divider-line" />
      </div>

      {/* ── FORM SECTION ── */}
      <section className="contact-form-section">
        <div className="form-layout">

          {/* Left Aside */}
          <div className="form-aside">
            <h2 className="aside-heading">
              We'd love to <em>hear</em> from you
            </h2>
            <p className="aside-body">
              Whether you have a question about a loan, need help understanding a
              government subsidy, or just want expert advice — fill out the form
              and our specialists will get back to you promptly.
            </p>

            <div className="aside-stat-row">
              <div className="aside-stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Clients Served</span>
              </div>
              <div className="aside-stat">
                <span className="stat-number">24h</span>
                <span className="stat-label">Response Time</span>
              </div>
              <div className="aside-stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfaction Rate</span>
              </div>
              <div className="aside-stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>

            <div className="aside-note">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
              </svg>
              Your information is 100% secure and never shared.
            </div>
          </div>

          {/* Form Card */}
          <div className="form-card">
            <div className="form-card-header">
              <h2>Send us a Message</h2>
              <p>Fill in the details below and we'll reach out shortly.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name <span className="required">*</span></label>
                  <div className="input-wrap">
                    <input
                      type="text" id="name" name="name"
                      value={formData.name} onChange={handleChange}
                      required placeholder="Enter your name"
                    />
                    <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address <span className="required">*</span></label>
                  <div className="input-wrap">
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange}
                      required placeholder="your.email@example.com"
                    />
                    <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number <span className="required">*</span></label>
                  <div className="input-wrap">
                    <input
                      type="tel" id="phone" name="phone"
                      value={formData.phone} onChange={handleChange}
                      required placeholder="+91 XXXXX XXXXX"
                    />
                    <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject <span className="required">*</span></label>
                  <div className="input-wrap">
                    <select
                      id="subject" name="subject"
                      value={formData.subject} onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="Loan Inquiry">Loan Inquiry</option>
                      <option value="Government Subsidy">Government Subsidy</option>
                      <option value="Insurance">Insurance</option>
                      <option value="General Query">General Query</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                    <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message <span className="required">*</span></label>
                <div className="input-wrap">
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={handleChange}
                    required rows="6"
                    placeholder="Tell us more about your requirements…"
                  />
                  <svg className="input-icon input-icon-textarea" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
              </div>

              {status.message && (
                <div className={`status-message ${status.type}`}>
                  {status.type === "success" ? (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                    </svg>
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="spinner" />
                    <span>Sending…</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;