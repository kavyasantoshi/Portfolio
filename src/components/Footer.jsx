import React from 'react';

const NAV_ITEMS = ['home','about','projects','skills','certifications','education','contact'];

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">Kavya Santoshi Korla</span>
            <p className="footer-tagline">Full-Stack Developer · Problem Solver · Lifelong Learner</p>
          </div>
          <div className="footer-links">
            {NAV_ITEMS.map(id => (
              <button key={id} onClick={() => scrollTo(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
          <div className="footer-social">
            <a href="https://github.com/Kavyasantoshi" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/kavya-santoshi-korla-33b596312/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:kavyasanthoshikorla@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kavya Santoshi Korla. All rights reserved.</p>
          <p className="footer-credit">
            Designed &amp; Built with <i className="fas fa-heart" style={{ color: '#9ACD32' }}></i> by Kavya
          </p>
        </div>
      </div>
    </footer>
  );
}
