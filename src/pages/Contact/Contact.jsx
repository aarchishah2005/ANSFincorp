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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // Using Web3Forms (Free service - no backend needed)
    // Get your access key from https://web3forms.com
    const web3formsKey = "YOUR_WEB3FORMS_ACCESS_KEY"; // Replace with your actual key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to: "ansfincorp@gmail.com", // Your email
          from_name: "ANS Fincorp Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-page">
      {/* Animated Background Elements */}
      <div className="bg-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>

      <div className="contact-header">
        <span className="header-badge">Get In Touch</span>
        <h1>Let's Start a Conversation</h1>
        <p>
          Have a query or need expert financial guidance? Our team at ANS
          Fincorp is ready to help you navigate loans, subsidies, and insurance
          solutions.
        </p>
      </div>

      <div className="contact-container">
        {/* Contact Info Cards */}
        <div className="contact-info-section">
          <div className="info-card location-card">
            <div className="icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3>Visit Our Office</h3>
            <p>
              D-422, 4th Floor, ITC Building,
              <br />
              Near Majura Gate, Surat,
              <br />
              Gujarat – 395001
            </p>
          </div>

          <div className="info-card phone-card">
            <div className="icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3>Call Us Anytime</h3>
            <p>
              <a href="tel:+916358849229">+91 63588 49229</a>
            </p>
            <span className="availability">Mon-Sat: 9:00 AM - 7:00 PM</span>
          </div>

          <div className="info-card email-card">
            <div className="icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3>Email Us</h3>
            <p>
              <a href="mailto:ansfincorp@gmail.com">ansfincorp@gmail.com</a>
            </p>
            <span className="availability">We'll respond within 24 hours</span>
          </div>

          <div className="services-highlight">
            <h3>Our Services</h3>
            <ul>
              <li>
                <span className="check-icon">✓</span>Personal & Business Loans
              </li>
              <li>
                <span className="check-icon">✓</span>Government Subsidies
              </li>
              <li>
                <span className="check-icon">✓</span>Life & General Insurance
              </li>
              <li>
                <span className="check-icon">✓</span>Financial Planning
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <div className="form-header">
            <h2>Send us a Message</h2>
            <p>Fill out the form below and we'll get back to you shortly</p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email Address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">
                  Subject <span className="required">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
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
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Your Message <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell us more about your requirements..."
              ></textarea>
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

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </>
              )}
            </button>
          </form>

          <div className="form-footer">
            <p>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
              </svg>
              Your information is secure and will never be shared with third
              parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;