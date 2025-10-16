import { React, useState  } from 'react';
import './Contact.css';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        // ===================================================================
        // == STEP 3: APNI ACCESS KEY YAHAAN PASTE KAREIN ==
        // ===================================================================
        formData.append("access_key", "5ebb4919-c7fe-42cc-b5c4-ec4318a7f772"); 

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            setResult("Success! Your message has been sent.");
            event.target.reset();
        } else {
            console.log("Error", res);
            setResult(res.message);
        }
    };

    const { ref: headingRef, inView: headingInView } = useInView({ threshold: 0.2, triggerOnce: true });
    const { ref: wrapperRef, inView: wrapperInView } = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <div id="contact" className="contact-section">
            <div ref={headingRef}>
                <h4 className={`intro-subtitle ${headingInView ? 'reveal-visible' : 'reveal-hidden'}`} style={{ '--delay': '0.1s' }}>
                    Connect With Me
                </h4>
                <h2 className={`main-heading ${headingInView ? 'reveal-visible' : 'reveal-hidden'}`} style={{ '--delay': '0.2s' }}>
                    <span className="gradient-text">Get in Touch</span>
                </h2>
                <p className={`section-description ${headingInView ? 'reveal-visible' : 'reveal-hidden'}`} style={{ '--delay': '0.3s' }}>
                    Have a project in mind or just want to say hello? I'd love to hear from you. Let's build something amazing together!
                </p>
            </div>

            <div ref={wrapperRef} className="contact-wrapper">
                {/* Left Side: Contact Info */}
                <div className={`contact-info ${wrapperInView ? 'reveal-visible' : 'reveal-hidden'}`} style={{ '--delay': '0.4s' }}>
                    <h3 className="info-title">Let's Connect</h3>
                    <p className="info-description">
                        Feel free to reach out via email, connect with me on social media, or fill out the form. I'm always open to discussing new projects and opportunities.
                    </p>
                    <ul className="contact-details">
                        <li className="contact-item">
                            <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <span className="contact-text">evilistno@gmail.com</span>
                        </li>
                        <li className="contact-item">
                           <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                           <span className="contact-text">+91 8837792427</span>
                        </li>
                        <li className="contact-item">
                            <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            <span className="contact-text">Phillaur, Punjab, India</span>
                        </li>
                    </ul>
                    <ul className="social-links">
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer"><svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a></li>
                    </ul>
                </div>

                {/* Right Side: Form */}
                <form onSubmit={onSubmit} className={`contact-form ${wrapperInView ? 'reveal-visible' : 'reveal-hidden'}`} style={{ '--delay': '0.6s' }}>
                    <input type="hidden" name="subject" value="New Submission from Portfolio" />
                    <div className="form-grid">
                        <input type="text" placeholder="Your Name" className="form-input" required name="name" />
                        <input type="email" placeholder="Your Email" className="form-input" required name="email" />
                    </div>
                    <textarea rows="6" placeholder="Your Message" className="form-textarea" required name="message"></textarea>
                    
                    <div className="submit-wrapper">
                        <button type='submit' className="submit-btn">
                            Send Message
                        </button>
                    </div>
                    
                    {result && (
                        <p className={`form-result ${result.includes('Success') ? 'success' : 'error'}`}>{result}</p>
                    )}
                </form>
            </div>
        </div>
    );
}
