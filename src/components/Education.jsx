import React, { useEffect, useRef } from 'react';

function EduCard({ icon, college, degree, meta, progress }) {
  const barRef = useRef();
  const cardRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && barRef.current) {
          barRef.current.style.width = `${progress}%`;
        }
      },
      { threshold: 0.3 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [progress]);

  return (
    <div className="education-card" ref={cardRef}>
      <div className="education-header">
        <div className="icon"><i className={icon}></i></div>
        <h3>{college}</h3>
      </div>
      <h4>{degree}</h4>
      {meta.map((m, i) => <p key={i}><strong>{m.label}</strong> {m.value}</p>)}
      <br />
      <p><strong>{progress === 100 ? 'Status:' : 'Current Progress:'}</strong></p>
      <div className="progress-bar">
        <div
          className="progress-fill"
          ref={barRef}
          style={{ width: 0, transition: 'width 1.5s cubic-bezier(0.25,1,0.5,1)' }}
        />
      </div>
    </div>
  );
}

export default function Education() {
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
    <section id="education">
      <div className="section-header">
        <h2>Education Journey</h2>
      </div>
      <div className="education-grid fade-in" ref={ref}>
        <EduCard
          icon="fas fa-university"
          college="Aditya College of Engineering and Technology"
          degree="Bachelor of Technology in Computer Science and Engineering"
          meta={[
            { label: 'Expected:', value: 'May 2027' },
            { label: 'GPA:', value: '9.18 / 10.00' },
          ]}
          progress={25}
        />
        <EduCard
          icon="fas fa-school"
          college="Sri Chaitanya Junior College"
          degree="Intermediate (MPC)"
          meta={[
            { label: 'Completed:', value: '2023' },
            { label: 'Percentage:', value: '96.3%' },
          ]}
          progress={100}
        />
      </div>
    </section>
  );
}
