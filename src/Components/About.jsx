import React from 'react';
import { Container } from 'react-bootstrap';


const About = () => (
    <section id="about" className="section">
        <Container className="text-center">
            <h2 className="display-3 fw-bold mb-4">About Me</h2>
            <p className="lead mb-4">
                I am a passionate and detail-oriented Full-Stack Developer  with hands-on experience in developing dynamic web applications using technologies like JavaScript, React, Node.js, MongoDB, and PHP. I have successfully built and maintained several inventory and data management systems. With a solid understanding of both frontend and backend development, I thrive in collaborative environments and am always eager to learn and adopt new technologies to deliver impactful solutions.
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
