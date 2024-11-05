import React from 'react';
import './AboutMe.css';

const AboutMe: React.FC = () => {
    return (
        <div className="about-me">
            <section className="intro">
                <img src={`${process.env.PUBLIC_URL}/me.png`} alt="me" className="me-photo" />
                <h1>josh whiteley</h1>
                <div className="contact-icons">
                    {/* LinkedIn */}
                    <a href="https://linkedin.com/in/joshua-whiteley-594350155" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    {/* GitHub */}
                    <a href="https://github.com/joshwhiteley" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                    </a>
                    {/* Email */}
                    <a href="mailto:joshua.whiteley@tufts.edu" target="_blank" rel="noopener noreferrer" aria-label="Email">
                    <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </section>
            
            <section>
                <h2>past</h2>
                <p>previously did undergraduate research in rohit bhargava's research group at the university of illinois at urbana-champaign</p>
            </section>

            <section>
                <h2>present</h2>
                <p>currently a phd candidate at tufts university doing research in bree aldridge's research group working on using computational modeling to advance tuberculosis treatment</p>
            </section>

            <section>
                <h2>future</h2>
                <p>wherever the wind takes me</p>
            </section>

            <section>
                <h2>interests</h2>
                <p>car racing</p>
                <p>my cat, donut</p>
                <p>exploring new cultures via travel</p>
            </section>
        </div>
    );
};

export default AboutMe;