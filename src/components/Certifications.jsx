import React, { useEffect, useRef } from 'react';

const CERTS = [
  {
    icon: 'fas fa-database',
    issuer: 'MongoDB University',
    title: 'MongoDB Associate Developer',
    desc: 'Proficiency in building applications with MongoDB, including CRUD operations, aggregation pipelines, and data modeling.',
  },
  {
    icon: 'fab fa-redhat',
    issuer: 'Red Hat',
    title: 'RHCSA',
    desc: 'Red Hat Certified System Administrator — expertise in Linux system administration, file systems, and service management.',
  },
  {
    icon: 'fab fa-java',
    issuer: 'Oracle',
    title: 'Java Foundations',
    desc: 'Oracle-certified foundation in Java programming, covering OOP principles, data structures, and core Java APIs.',
  },
  {
    icon: 'fab fa-html5',
    issuer: 'Certiport / IT Specialist',
    title: 'IT Specialist — HTML & CSS',
    desc: 'Industry-recognized certification in web markup and styling, including responsive layouts and modern CSS techniques.',
  },
  {
    icon: 'fab fa-python',
    issuer: 'Cisco Networking Academy',
    title: 'Python Essentials',
    desc: 'Core Python programming — variables, control flow, functions, modules, and introductory object-oriented programming.',
  },
  {
    icon: 'fas fa-server',
    issuer: 'Cisco Networking Academy',
    title: 'Operating Systems Basics',
    desc: 'Fundamentals of OS concepts including process management, memory, file systems, and security principles.',
  },
];

export default function Certifications() {
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
    <section id="certifications">
      <div className="section-header">
        <h2>Certifications</h2>
        <p className="section-subtitle">Validated skills &amp; industry-recognized credentials</p>
      </div>
      <div className="certs-grid fade-in" ref={ref}>
        {CERTS.map((c, i) => (
          <div className="cert-card" key={i}>
            <div className="cert-icon-wrap">
              <i className={c.icon}></i>
            </div>
            <div className="cert-body">
              <span className="cert-issuer">{c.issuer}</span>
              <h3 className="cert-title">{c.title}</h3>
              <p className="cert-desc">{c.desc}</p>
            </div>
            <div className="cert-badge">
              <i className="fas fa-certificate"></i> Certified
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
