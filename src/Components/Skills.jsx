import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const skills = {
    Languages: ['Core Java', 'Python', 'JavaScript', 'HTML', 'CSS'],
    Frameworks: ['Bootstrap', 'React', 'Node.js', 'Express.js'],
    Tools: ['Git', 'SQL', 'MongoDB', 'Android Studio', 'VS Code', 'Docker'],
    Concepts: ['OOP', 'Data Structures', 'Algorithms', 'RESTful APIs', 'Database Design']
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const Skills = () => (
    <Container className="my-5">
        <h2 className="text-center mb-4">Skills</h2>
        <Row className="justify-content-center">
            {Object.keys(skills).map((category, index) => (
                <Col md={6} lg={4} key={category} className="mb-4">
                    {/* Use motion.div and apply variants */}
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible" // Animate when in view
                        viewport={{ once: true, amount: 0.5 }} // Trigger once, when 50% of the element is visible
                        transition={{ delay: index * 0.1 }} // Stagger delay
                    >
                        <Card className="h-100 shadow-sm skills-card">
                            <Card.Body>
                                <Card.Title className="text-primary fs-4 mb-3">{category}</Card.Title>
                                <ul className="list-unstyled">
                                    {skills[category].map((skill, skillIndex) => (
                                        <li key={skillIndex} className="skill-item">
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </Col>
            ))}
        </Row>
    </Container>
);

export default Skills;