import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => (
    <section id="about" className="section">
        <Container className="text-center">
            <h2 className="display-3 fw-bold mb-4">About Me</h2>
            <p className="lead mb-4">
                I’m Chethan V, a passionate Full-Stack Developer with hands-on experience in building scalable web and mobile applications.
                I specialize in creating impactful digital solutions using modern technologies and frameworks.
            </p>

            <a
                href="CHETHAN-V-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-button"
            >
                Download Resume
            </a>
        </Container>
    </section>
);

export default About;
