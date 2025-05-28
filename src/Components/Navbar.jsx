import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => (
    <Navbar expand="lg" className="custom-navbar">
        <Container>
            <Navbar.Brand as={Link} to="/" className="logo">
                <FontAwesomeIcon icon={faCircle} style={{ color: '#1E90FF', marginRight: '8px' }} />
                Chethan V
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <div className="menu-container">
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="nav-link">About</Nav.Link>
                        <Nav.Link as={Link} to="/skills" className="nav-link">Skills</Nav.Link>
                        <Nav.Link as={Link} to="/projects" className="premium-link">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="nav-link">Contact</Nav.Link>
                    </Nav>
                </div>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default Navigation;