import React from 'react';
import { Container } from 'react-bootstrap';


const About = () => (
    <section id="about" className="section">
        <Container className="text-center">
            <h2 className="display-5 fw-bold ">About Me</h2>
            <p className="lead mb-4">
                Passionate Full-Stack Developer with hands-on experience in building dynamic web apps using JavaScript, React, Node.js, MongoDB, and PHP. Skilled in developing inventory and data systems, with a strong grasp of both frontend and backend. Eager to learn and deliver impactful solutions in collaborative environments.
            </p>

            <a
                href="/Portfolio/CHETHAN-V-Resume.pdf"
                download="CHETHAN-V-Resume.pdf"
                className="pill-button"
            >
                Download Resume
            </a>
        </Container>
    </section>
);

export default About;
