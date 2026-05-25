import React from 'react';
import myImage from '../assets/my_image.jpg';

export default function Home() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home">
      <div className="home-content">
        <h1>Hello, I'm Kavya Santoshi</h1>
        <h2>Full-Stack Developer</h2>
        <p className="description">
          I specialize in building responsive, dynamic, and user-friendly web
          applications. As a Full-Stack Development Intern, my focus is on
          creating clean code and engaging digital experiences.
        </p>
        <div className="home-buttons">
          <a href="/KavyaSantoshi.pdf" className="btn btn-primary" download="Kavya_Santoshi_Resume.pdf">
            Download CV
          </a>
          <button className="btn btn-secondary" onClick={() => scrollTo('projects')}>
            See my work &nbsp;<i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div className="home-image">
        <div className="shape shape-1">▲</div>
        <div className="shape shape-2">⬋</div>
        <div className="image-frame">
          <img src={myImage} alt="Kavya Santoshi Korla" className="profile-picture" />
        </div>
      </div>
    </section>
  );
}
