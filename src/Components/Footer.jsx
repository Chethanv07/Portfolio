import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
    <footer className="bg-dark text-white text-center py-3">
        <Container>
            <p>© 2025 Chethan V. All rights reserved.</p>
            <p>
                <a href="https://github.com/Chethan-v07" target="_blank" rel="noopener noreferrer" className="text-white mx-2">GitHub</a>
                <a href="https://linkedin.com/in/Chethanv07" target="_blank" rel="noopener noreferrer" className="text-white mx-2">LinkedIn</a>
            </p>
        </Container>
    </footer>
);
export default Footer;