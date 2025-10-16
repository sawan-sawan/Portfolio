import React from 'react';
import './Services.css';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    name: 'Responsive Web Development',
    icon: (
      <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
    ),
    description: 'Creating stunning websites that provide a seamless experience on any device, from mobile phones to desktops.',
  },
  {
    name: 'Interactive UI & UX',
    icon: (
      <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
    ),
    description: 'Designing intuitive and engaging user interfaces with smooth animations that bring your ideas to life.',
  },
  {
    name: 'Performance & SEO',
    icon: (
      <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    ),
    description: 'Optimizing your website for blazing-fast load times and improving visibility on search engines like Google.',
  },
];

export default function Services() {
  const { ref: headingRef, inView: headingInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: gridRef, inView: gridInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div id="services" className="services-section">
      <div ref={headingRef} className={`services-heading ${headingInView ? 'reveal-visible' : 'reveal-hidden'}`}>
        <h4 className="intro-subtitle" style={{ '--delay': '0.1s' }}>What I Offer</h4>
        <h2 className="main-heading" style={{ '--delay': '0.2s' }}>
          <span className="gradient-text">My Services</span>
        </h2>
        <p className="section-description" style={{ '--delay': '0.3s' }}>
          I build high-quality, modern web applications that are fast, responsive, and user-friendly.
        </p>
      </div>

      <div ref={gridRef} className="services-grid">
        {services.map((service, index) => (
          <div
            key={service.name}
            className={`service-card ${gridInView ? 'reveal-visible' : 'reveal-hidden'}`}
            style={{ '--delay': `${(index + 1) * 0.2}s` }}
          >
            {service.icon}
            <h3 className="service-title">{service.name}</h3>
            <p className="service-description">{service.description}</p>
            <a href="#" className="service-link">
              Learn more
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
