import React, { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact">
      <div className="section-header">
        <h2>Get In Touch</h2>
      </div>
      <div className="glass-card fade-in" ref={ref}>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <div className="icon"><i className="fas fa-envelope"></i></div>
              <div>
                <p>kavyasanthoshikorla@gmail.com</p>
                <span>Email</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon"><i className="fas fa-phone"></i></div>
              <div>
                <p>+91-80748 68211</p>
                <span>Phone</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
              <div>
                <p>Kakinada, Andhra Pradesh</p>
                <span>Location</span>
              </div>
            </div>
            <h3 style={{ marginTop: '2rem' }}>Connect With Me</h3>
            <div className="contact-socials">
              <a href="https://github.com/Kavyasantoshi" target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/kavya-santoshi-korla-33b596312/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message here..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message <i className="fas fa-paper-plane"></i>
              </button>
              {submitted && (
                <div className="form-status success">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
