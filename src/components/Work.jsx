import React, { useState } from 'react';
import './Work.css';
import { useInView } from 'react-intersection-observer';

// Apne projects ki jankari yahan daalein (Maine ek 5th project add kar diya hai)
const projects = [
  {
    name: 'E-commerce Store Website',
    image: 'https://res.cloudinary.com/dm9sbfva5/image/upload/v1764320595/Screenshot_2025-10-15_141847_sotm30.png',
    description: 'A modern e-commerce platform with a clean UI.',
    technologies: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB'],
    liveLink: 'https://www.vertoshop.store/',
  },
  {
    name: 'Resort Booking Website',
    image: 'https://res.cloudinary.com/dm9sbfva5/image/upload/v1764320587/grandvirsa_x0extn.png',
    description: 'A web app to manage resort bookings and inquiries.',
    technologies: ['JavaScript', 'HTML5', 'API', 'CSS'],
    liveLink: 'https://grand-virsa.vercel.app/',
  },
  {
    name: 'Agriculture Equipment Website',
    image: 'https://res.cloudinary.com/dm9sbfva5/image/upload/v1764320584/brownkudi_zhnquv.png',
    description: 'A platform connecting farmers with equipment buyers.',
    technologies: ['Figma', 'Photoshop', 'Illustrator'],
    liveLink: 'https://www.brownkudi.com/',
  },
  {
    name: 'My Portfolio Website',
    image: 'https://res.cloudinary.com/dm9sbfva5/image/upload/v1764320586/portfolio_whncp3.png',
    description: 'A personal portfolio to showcase skills and projects.',
    technologies: ['Next.js', 'TypeScript', 'CSS Modules'],
    liveLink: 'https://www.sawankumar.site/',
  },
  { // YEH 5th PROJECT HAI
    name: 'Workshop Website ',
    image: 'https://res.cloudinary.com/dm9sbfva5/image/upload/v1764320590/sohal_lnmpqu.png', // Aap image ka path badal sakte hain
    description: 'A website for managing workshops and events.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'CSS'],
    liveLink: 'https://sohalenggworks.com/',
  },
];

export default function Work() {
  const { ref: headingRef, inView: headingInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: gridRef, inView: gridInView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  const [showAll, setShowAll] = useState(false);

  const handleToggleProjects = () => {
    setShowAll(!showAll);
  };

  // YEH BADLA GAYA HAI: Ab shuru mein 4 projects dikhenge
  const projectsToShow = showAll ? projects : projects.slice(0, 4);

  return (
    <div id="work" className="work-section">
      <div ref={headingRef}>
        <h4 className={`intro-subtitle ${headingInView ? 'reveal-visible' : 'reveal-hidden'}`} style={{ '--delay': '0.1s' }}>
          My Projects
        </h4>
        <h2 className={`main-heading ${headingInView ? 'reveal-visible' : 'reveal-hidden'}`} style={{ '--delay': '0.2s' }}>
          <span className="gradient-text">My Latest Work</span>
        </h2>
        <p className={`section-description ${headingInView ? 'reveal-visible' : 'reveal-hidden'}`} style={{ '--delay': '0.3s' }}>
          Explore a collection of projects showcasing my expertise in front-end development and design.
        </p>
      </div>

      <div ref={gridRef} className="work-grid">
        {projectsToShow.map((project, index) => (
          <div
            key={project.name}
            className={`work-card ${gridInView ? 'reveal-visible' : 'reveal-hidden'}`}
            style={{ '--delay': `${(index + 1) * 0.2}s` }}
          >
            <img src={project.image} alt={project.name} className="work-image" />
            <div className="work-overlay">
              <div>
                <h3 className="work-title">{project.name}</h3>
                <p className="work-description-text">{project.description}</p>
                <ul className="work-tech-list">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="tech-tag">{tech}</li>
                  ))}
                </ul>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="work-link">
                  View Project
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* YEH BADLA GAYA HAI: Button tab dikhega jab 4 se zyada project honge */}
      {projects.length > 4 && (
        <button onClick={handleToggleProjects} className="show-more-btn">
          {showAll ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
  );
}