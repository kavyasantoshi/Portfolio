import React, { useEffect, useRef } from 'react';

const SKILL_CATS = [
  {
    icon: 'fas fa-code',
    title: 'Programming Languages',
    skills: [
      { name: 'C++', pct: 90 },
      { name: 'Java', pct: 85 },
      { name: 'Python', pct: 80 },
      { name: 'C', pct: 75 },
    ],
  },
  {
    icon: 'fas fa-globe',
    title: 'Web Development',
    skills: [
      { name: 'HTML', pct: 95 },
      { name: 'CSS', pct: 90 },
      { name: 'JavaScript', pct: 85 },
    ],
  },
  {
    icon: 'fas fa-cogs',
    title: 'Databases & Tools',
    skills: [
      { name: 'SQL', pct: 85 },
      { name: 'Git & GitHub', pct: 90 },
      { name: 'VS Code', pct: 95 },
    ],
  },
];

function SkillBar({ name, pct }) {
  const barRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && barRef.current) {
          barRef.current.style.width = `${pct}%`;
        }
      },
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current.parentElement);
    return () => observer.disconnect();
  }, [pct]);

  return (
    <div className="skill-item">
      <div className="skill-header">
        <span>{name}</span>
        <span>{pct}%</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" ref={barRef} style={{ width: 0, transition: 'width 1.5s cubic-bezier(0.25,1,0.5,1)' }} />
      </div>
    </div>
  );
}

export default function Skills() {
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
    <section id="skills">
      <div className="section-header">
        <h2>Technical Skills</h2>
      </div>
      <div className="skills-grid fade-in" ref={ref}>
        {SKILL_CATS.map((cat, i) => (
          <div className="skill-category" key={i}>
            <h3><i className={cat.icon}></i> {cat.title}</h3>
            {cat.skills.map(s => <SkillBar key={s.name} {...s} />)}
          </div>
        ))}
      </div>
    </section>
  );
}
