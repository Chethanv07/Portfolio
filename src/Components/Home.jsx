
import { Container, Row, Col, Button } from 'react-bootstrap';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
import gmailIcon from '../assets/gmail.svg';

import developerIllustration from '/assets/developer-illustration.svg';

const Home = () => (
    <>
        <div className="hero-background" />
        <Container className="position-relative z-1 d-flex justify-content-center align-items-center text-center" style={{ minHeight: '100vh' }}>
            <Row className="w-100">
                <Col lg={6} md={12} className="mb-4 mb-lg-0">
                    <h1 className="display-5 fw-bold mb-3 text-secondary">Hi, I'm</h1>
                    <h1 className="display-3 fw-bold mb-3">Chethan V</h1>
                    <p className="lead mb-3">Full-Stack Developer | Software Devloper</p>
                    <p className="text-muted mb-4">
                        I specialize in building scalable web applications using modern technologies.
                    </p>
                    {/* Social Links */}
                    <div className="d-flex justify-content-center mt-4 ">
                        <a href="https://www.linkedin.com/in/chethan-v07/" target="_blank" rel="noopener noreferrer" className="mx-3 text-dark icon-trans">
                            <img src={linkedinIcon} alt="LinkedIn" height="50px" />
                        </a>
                        <a href="https://github.com/Chethanv07" target="_blank" rel="noopener noreferrer" className="mx-3 text-dark icon-trans">
                            <img src={githubIcon} alt="GitHub" width="40" height="50" />
                        </a>
                        <a href="mailto:vchethanv01983@gmail.com" className="mx-3 text-dark icon-trans">
                            <img src={gmailIcon} alt="Gmail" height="50" />
                        </a>
                    </div>
                </Col>
                <Col lg={6} md={12}>
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
