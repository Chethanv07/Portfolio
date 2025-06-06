import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => (
    <Navbar expand="lg" className="custom-navbar">
        <Navbar.Brand as="a" href="#home" className="logo ms-3">
            <FontAwesomeIcon icon={faCircle} className="logo-icon" style={{ marginRight: '8px' }} />
            Chethan V
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3" />
        <Navbar.Collapse id="basic-navbar-nav">
            <div className="menu-container mx-auto">
                <Nav>
                    <Nav.Link as="a" href="#home" className="nav-link">Home</Nav.Link>
                    <Nav.Link as="a" href="#about" className="nav-link">About</Nav.Link>
                    <Nav.Link as="a" href="#skills" className="nav-link">Skills</Nav.Link>
                    <Nav.Link as="a" href="#projects" className="nav-link">Projects</Nav.Link>
                    <Nav.Link as="a" href="#contact" className="nav-link">Contact</Nav.Link>
                </Nav>
            </div>
            <Nav className="ms-auto me-3">
                <Nav.Link as="a" href="CHETHAN-V-Resume.pdf" download="" className="premium-link">
                    <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }} />
                    Resume
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Navigation;