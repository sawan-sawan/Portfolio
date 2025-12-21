import React, { useEffect, useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("Home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Hero reveal animations
    useEffect(() => {
        const elements = document.querySelectorAll(".hero-reveal");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add("show-up");
                        }, index * 200);
                    }
                });
            },
            { threshold: 0.2 }
        );
        elements.forEach((el) => observer.observe(el));
        return () => elements.forEach((el) => observer.unobserve(el));
    }, []);

    // Mobile nav link click handler
    const handleMobileNavClick = (section, linkName) => {
        if (linkName === "Resume") {
            window.open("/resume.pdf", "_blank", "noopener,noreferrer");
        } else {
            const target = document.querySelector(section);
            if (target) target.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
        setActiveLink(linkName);
    };

    return (
        <div id="home" className="hero-wrapper">
            {/* Background SVG */}
            <svg className="bg-svg" width="1440" height="720" viewBox="0 0 1440 720" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path stroke="#1D293D" strokeOpacity=".7" d="M-15.227 702.342H1439.7" />
                <circle cx="711.819" cy="372.562" r="308.334" stroke="#1D293D" strokeOpacity=".7" />
                <circle cx="16.942" cy="20.834" r="308.334" stroke="#1D293D" strokeOpacity=".7" />
                <path stroke="#1D293D" strokeOpacity=".7" d="M-15.227 573.66H1439.7M-15.227 164.029H1439.7" />
                <circle cx="782.595" cy="411.166" r="308.334" stroke="#1D293D" strokeOpacity=".7" />
            </svg>

            {/* Navbar */}
            <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
                <a href="#home" className="logo">
                    <img src="https://ik.imagekit.io/02x2rciof/navlogomain.png" alt="logo" />
                </a>
                <div className="nav-links">
                    <a href="#home" className={activeLink === "Home" ? "active" : ""} onClick={() => setActiveLink("Home")}>Home</a>
                    <a href="#work" className={activeLink === "Work" ? "active" : ""} onClick={() => setActiveLink("Work")}>Work</a>
                    <a href="#about" className={activeLink === "About" ? "active" : ""} onClick={() => setActiveLink("About")}>About</a>
                    <a href="#services" className={activeLink === "Services" ? "active" : ""} onClick={() => setActiveLink("Services")}>Services</a>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={activeLink === "Resume" ? "active" : ""} onClick={() => setActiveLink("Resume")}>Resume</a>
                </div>
                <a href="#contact" className="contact-btn">Contact us</a>
                <button id="open-menu" className="menu-btn" onClick={() => setIsMenuOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" />
                    </svg>
                </button>
            </nav>

            {/* Mobile Nav - New Slide-In Design */}
            <div className={`mobile-nav ${isMenuOpen ? "show" : "hide"}`}>
                <div className="mobile-nav-header">
                    <a href="#home" className="mobile-logo" onClick={() => setIsMenuOpen(false)}>
                        <img src="https://ik.imagekit.io/02x2rciof/navlogomain.png?updatedAt=1766056443600" alt="logo" />
                    </a>
                    <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                        </svg>
                    </button>
                </div>
                <div className="mobile-nav-links">
                    <a onClick={() => handleMobileNavClick("#home", "Home")}> <svg className="mobile-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> Home </a>
                    <a onClick={() => handleMobileNavClick("#work", "Work")}> <svg className="mobile-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg> Work </a>

                    <a onClick={() => handleMobileNavClick("#about", "About")}> <svg className="mobile-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> About </a>
                    <a onClick={() => handleMobileNavClick("#services", "Services")}> <svg className="mobile-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> Services </a>
                    <a onClick={() => handleMobileNavClick("#resume", "Resume")}> <svg className="mobile-nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg> Resume </a>
                </div>
                <div className="mobile-socials">
                    <a href="#" target="_blank" rel="noopener noreferrer"> <svg className="mobile-social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> </a>
                    <a href="#" target="_blank" rel="noopener noreferrer"> <svg className="mobile-social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> </a>
                </div>
            </div>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-reveal">Hello, I'm <br /><span style={{ color: "#5097f7" }}>Sawan</span></h1>
                    <p className="hero-reveal"> Frontend Developer creating digital solutions that matter.</p>
                    <div className="hero-buttons hero-reveal">
                        <a href="#work" className="get-started" style={{ backgroundColor: "rgb(80, 151, 247)", color: "white" }}>View Work</a>
                        <a href="#contact" className="watch-demo" style={{ background: "transparent", border: "1px solid #475569", color: "white" }}>Contact</a>
                    </div>

                    <div className="social-links hero-reveal">
                        <a href="https://www.linkedin.com/in/evilist-no-02629936b/" target="_blank" rel="noopener noreferrer">
                            <div className="icon-wrapper linkedin">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </div>
                        </a>
                        <a href="https://github.com/sawan-sawan" target="_blank" rel="noopener noreferrer">
                            <div className="icon-wrapper github">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </div>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <div className="icon-wrapper instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </div>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <div className="icon-wrapper facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="hero-image-container hero-reveal">
                    <img src="https://ik.imagekit.io/02x2rciof/mainimg.jpg" alt="hero" className="hero-img" />
                    <div className="image-popup">
                        <div className="popup-heart">❤️</div>
                        <div className="popup-content">
                            <p className="popup-number">50 ↗</p>
                            <p className="popup-text">Happy clients</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;