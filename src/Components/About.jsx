import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => (
    <Container className="my-5">
        <h2>About Me</h2>
        <p>
            I’m Chethan, an MCA student at Dayananda Sagar Academy (CGPA: 8.2), passionate about building impactful web and mobile solutions. My goal is to contribute to innovative projects and grow as a developer.
        </p>
        <p>
            <a href="path-to-resume.pdf" target="_blank" rel="noopener noreferrer">Download My Resume</a>
        </p>
    </Container>
);
export default About; // Should be a default export