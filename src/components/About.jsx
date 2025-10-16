import React, { useEffect } from "react";
import "./About.css";

export default function About() {
  useEffect(() => {
    // Sare elements jinke andar reveal-on-scroll class hai
    const revealElements = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver(
      (entries, observerRef) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll(".child-reveal");
            // 🔥 stagger effect: har element ek ke baad ek show hoga
            children.forEach((child, index) => {
              child.style.transitionDelay = `${index * 0.2}s`;
              child.classList.add("slide-up");
            });

            // Parent bhi slide-up ho (smooth entry)
            entry.target.classList.add("slide-up");
            observerRef.unobserve(entry.target); // ek hi baar chalega
          }
        });
      },
      { threshold: 0.25 }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" className="about-section">
      {/* ===== Headings Section ===== */}
      <div className="reveal-on-scroll">
        <h4 className="intro-subtitle child-reveal">Introduction</h4>
        <h2 className="main-heading child-reveal">
          <span className="gradient-text">About Me</span>
        </h2>
      </div>

      {/* ===== Content Section ===== */}
      <div className="content-wrapper reveal-on-scroll">
        {/* Image Section */}
        <div className="image-section child-reveal">
          <div className="image-container">
            <img src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1760604030/myphoto_w2jqje.png" alt="My Photo" className="profile-photo" />
          </div>
        </div>

        {/* Info Section */}
        <div className="info-section child-reveal">
          <p className="description child-reveal">
            I am a passionate Frontend Developer with a knack for creating modern and intuitive
            web applications. I have experience collaborating with diverse teams to deliver
            high-quality digital products.
          </p>

          <ul className="info-cards">
            <li className="card child-reveal">
              <div className="card-content">
                <img src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1760604027/code-icon-dark_mieqhn.png" alt="Languages" className="card-icon" />
                <h3 className="card-title">Languages</h3>
                <p className="card-description">HTML, CSS, JavaScript, React.js, Next.js</p>
              </div>
            </li>
            <li className="card child-reveal">
              <div className="card-content">
                <img src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1760604029/edu-icon-dark_zwxxrw.png" alt="Education" className="card-icon" />
                <h3 className="card-title">Education</h3>
                <p className="card-description">B.Tech in Computer Science</p>
              </div>
            </li>
            <li className="card child-reveal">
              <div className="card-content">
                <img src="https://res.cloudinary.com/dnyv7wabr/image/upload/v1760604031/project-icon-dark_zkkgqh.png" alt="Projects" className="card-icon" />
                <h3 className="card-title">Projects</h3>
                <p className="card-description">Built and contributed to 5+ projects</p>
              </div>
            </li>
          </ul>

          <h4 className="tools-heading child-reveal">Tools I Use</h4>

          <ul className="tools-list">
            {["vscode", "firebase", "mongodb", "figma", "git"].map((tool) => (
              <li key={tool} className="tool-item child-reveal">
                <img src={`./assets/${tool}.png`} alt={tool} className="tool-icon" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
