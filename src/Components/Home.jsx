import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import developerIllustration from '/assets/developer-illustration.svg';

const Home = () => (
    <>
        <div className="hero-background" />
        <Container className="position-relative z-1">
            <Row className="align-items-center" style={{ minHeight: '90vh' }}>
                <Col lg={6} md={12} className="mb-4 mb-lg-0">
                    <h1 className="display-3 fw-bold mb-3">Chethan V</h1>
                    <p className="lead mb-3">
                        Full-Stack Developer | MERN & Mobile App Enthusiast
                    </p>
                    <p className="text-muted mb-4">
                        I specialize in building scalable web and mobile applications using modern technologies like React, Node.js, and Kotlin.
                    </p>
                    <Button href="#projects" variant="primary" size="lg">
                        View My Work
                    </Button>
                </Col>
                <Col lg={6} md={12} className="text-center">
                    <img
                        src={developerIllustration}
                        alt="Developer Illustration"
                        className="img-fluid mx-auto"
                        style={{ maxWidth: '75%', height: 'auto' }}
                    />
                </Col>
            </Row>
        </Container>
    </>
);

export default Home;
