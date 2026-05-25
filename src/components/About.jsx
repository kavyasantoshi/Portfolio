import React, { useEffect, useRef } from 'react';

export default function About() {
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="about">
      <div className="section-header">
        <h2>About Me</h2>
      </div>
      <div className="glass-card fade-in" ref={ref}>
        <div className="about-content">
          <div className="about-text">
            <h3>Crafting Digital Experiences</h3>
            <p>
              Hello! I'm Kavya, a passionate <strong>Full-Stack Developer</strong> currently
              honing my skills as an intern on a real-time React Native project. My journey
              into web development is driven by a passion for building elegant,
              high-performance solutions.
            </p>
            <p>
              With a strong academic background in Computer Science (9.20 GPA) and a love
              for problem-solving, demonstrated by solving over 300+ coding challenges, I am
              dedicated to creating beautiful and intuitive web experiences. I'm a lifelong
              learner, always eager to embrace new challenges.
            </p>
            <button className="btn btn-primary" onClick={() => scrollTo('contact')}>
              Let's Talk &nbsp;<i className="fas fa-paper-plane"></i>
            </button>
          </div>
          <div className="about-details">
            <h3>My Details</h3>
            <ul className="details-list">
              <li><strong>Name:</strong> Kavya Santoshi Korla</li>
              <li><strong>Location:</strong> Kakinada, India</li>
              <li><strong>Email:</strong> kavyasanthoshikorla@gmail.com</li>
              <li><strong>Languages:</strong> English, Telugu</li>
            </ul>
            <div className="about-socials">
              <a href="https://github.com/Kavyasantoshi" target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/kavya-santoshi-korla-33b596312/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
