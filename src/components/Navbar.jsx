import React, { useState, useEffect } from 'react';

const NAV_ITEMS = ['home','about','projects','skills','certifications','education','contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    NAV_ITEMS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const label = (id) => id === 'home' ? 'Home' : id.charAt(0).toUpperCase() + id.slice(1).replace('certifications','Certifications');

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-container">
          <span className="logo" onClick={() => scrollTo('home')}>Kavya Santoshi Korla</span>
          <ul className="nav-links">
            {NAV_ITEMS.map(id => (
              <li key={id}>
                <a
                  className={active === id ? 'active' : ''}
                  onClick={() => scrollTo(id)}
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle Menu"
          >
            <div className="line" />
            <div className="line" />
            <div className="line" />
          </button>
        </div>
      </nav>

      <ul className={`mobile-nav${menuOpen ? ' open' : ''}`}>
        <li className="close-btn-item">
          <button className="close-btn" onClick={() => setMenuOpen(false)} aria-label="Close Menu">&times;</button>
        </li>
        {NAV_ITEMS.map(id => (
          <li key={id}>
            <button onClick={() => scrollTo(id)}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
