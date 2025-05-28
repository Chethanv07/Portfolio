import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import developerIllustration from '/assets/developer-illustration.png'; // Ensure this path is correct

const Home = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-section"
    >
        <div className="hero-background" />
        <Container className="position-relative z-1">
            <Row className="align-items-center" style={{ minHeight: '90vh' }}>
                {/* Left Column: Text */}
                <Col lg={6} md={12} className="mb-4 mb-lg-0">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="display-3 fw-bold mb-3">Chethan V</h1>
                        <p className="lead mb-3">
                            Full-Stack Developer | MERN & Mobile App Enthusiast
                        </p>
                        <p className="text-muted mb-4">
                            I specialize in building scalable web and mobile applications using modern technologies like React, Node.js, and Kotlin.
                        </p>
                        <Button as={Link} to="/projects" variant="primary" size="lg">
                            View My Work
                        </Button>
                    </motion.div>
                </Col>
                {/* Right Column: Illustration */}
                <Col lg={6} md={12}>
                    <motion.img
                        src={developerIllustration}
                        alt="Developer Illustration"
                        className="img-fluid"
                        style={{ maxWidth: '100%', height: 'auto' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                </Col>
            </Row>
        </Container>
    </motion.div>
);

export default Home;