import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png"; // adjust path if needed
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking on a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* LOGO */}
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="ANS Fincorp Logo" />
          </Link>
        </div>

        {/* NAVIGATION */}
        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            About Us
          </NavLink>
          <NavLink to="/ourteam" onClick={closeMenu}>
            Our Team
          </NavLink>
          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          {/* Mobile CTA inside nav */}
          <Link to="/contact" className="header-cta mobile-cta" onClick={closeMenu}>
            Apply Now
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link to="/contact" className="header-cta desktop-cta">
          Apply Now
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className={`mobile-menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;