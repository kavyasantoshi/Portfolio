import React, { useEffect, useRef } from 'react';
import easeHome from '../assets/Ease_Home.jpg';
import codeDelight from '../assets/code_delight.jpg';

const PROJECTS = [
  {
    img: easeHome,
    alt: 'EASE - Student Service Web App',
    title: 'EASE - Student Service Web App',
    desc: 'A responsive web app to streamline student services like appointment scheduling, queue tracking, and secure payment slot booking.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    code: 'https://github.com/Kavyasantoshikorla/Ease_web_project',
  },
  {
    img: codeDelight,
    alt: 'CodeDelight - Interactive Learning Platform',
    title: 'CodeDelight - Interactive Learning Platform',
    desc: 'A web platform offering courses in HTML, CSS, JS, and DSA, with a coin-based reward system and a FunZone featuring DSA-based games.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Gamification'],
    code: 'https://github.com/lohithaalekhyakollu/CodeDelight',
  },
];

export default function Projects() {
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects">
      <div className="section-header">
        <h2>Featured Projects</h2>
      </div>
      <div className="projects-grid fade-in" ref={ref}>
        {PROJECTS.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="project-image">
              <img src={p.img} alt={p.alt} />
            </div>
            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
              <div className="project-links">
                <a href={p.code} target="_blank" rel="noreferrer">
                  Code <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
