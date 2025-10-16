import React, { useState } from 'react'; // Import useState
import './Services.css';
import { useInView } from 'react-intersection-observer';

// --- ADDED DETAILED CONTENT FOR THE BACK OF THE CARD ---
const services = [
  {
    name: 'Responsive Web Development',
    icon: (
      <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
    ),
    description: 'Creating stunning websites that provide a seamless experience on any device, from mobile phones to desktops.',
    details: {
      title: 'Core Features',
      icon: ( // Different icon for the back
        <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>
      ),
      points: [
        'Mobile-First Approach',
        'Fluid Grids & Flexible Images',
        'Cross-Browser Compatibility',
        'Modern CSS & Frameworks',
      ],
    },
  },
  {
    name: 'Interactive UI & UX',
    icon: (
      <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
    ),
    description: 'Designing intuitive and engaging user interfaces with smooth animations that bring your ideas to life.',
    details: {
        title: 'Design Principles',
        icon: (
            <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
        ),
        points: [
            'User-Centric Design',
            'Interactive Prototypes',
            'Micro-interactions & Animations',
            'Accessibility (A11y) Focused',
        ],
    },
  },
  {
    name: 'Performance & SEO',
    icon: (
      <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    ),
    description: 'Optimizing your website for blazing-fast load times and improving visibility on search engines like Google.',
    details: {
        title: 'Optimization Stack',
        icon: (
            <svg className="service-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
        ),
        points: [
            'Code Splitting & Minification',
            'Image & Asset Optimization',
            'On-Page SEO Best Practices',
            'Lighthouse & Core Web Vitals',
        ],
    },
  },
];

export default function Services() {
  const { ref: headingRef, inView: headingInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: gridRef, inView: gridInView } = useInView({ threshold: 0.1, triggerOnce: true });

  // --- STATE TO TRACK THE EXPANDED CARD ---
  const [expandedCard, setExpandedCard] = useState(null);

  const handleLearnMore = (serviceName) => {
    setExpandedCard(serviceName);
  };

  const handleBack = () => {
    setExpandedCard(null);
  };

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
        {services.map((service, index) => {
          const isExpanded = expandedCard === service.name;
          return (
            <div
              key={service.name}
              // Add 'is-flipped' class when this card is expanded
              className={`service-card ${gridInView ? 'reveal-visible' : 'reveal-hidden'} ${isExpanded ? 'is-flipped' : ''}`}
              style={{ '--delay': `${(index + 1) * 0.2}s` }}
            >
              {/* --- INNER WRAPPER FOR 3D EFFECT --- */}
              <div className="service-card-inner">
                {/* --- FRONT SIDE OF THE CARD (Original Content) --- */}
                <div className="service-card-front">
                  {service.icon}
                  <h3 className="service-title">{service.name}</h3>
                  <p className="service-description">{service.description}</p>
                  <button onClick={() => handleLearnMore(service.name)} className="service-link">
                    Learn more
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </button>
                </div>

                {/* --- BACK SIDE OF THE CARD (Detailed Content) --- */}
                <div className="service-card-back">
                    {service.details.icon}
                    <h3 className="service-title">{service.details.title}</h3>
                    <ul className="service-details-list">
                        {service.details.points.map(point => <li key={point}>{point}</li>)}
                    </ul>
                  <button onClick={handleBack} className="service-link back-button">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
                    Back
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}