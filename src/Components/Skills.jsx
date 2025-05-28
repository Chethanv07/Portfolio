// src/components/Skills.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const skills = {
    Languages: ['Core Java', 'Python', 'JavaScript', 'HTML', 'CSS'],
    Frameworks: ['Bootstrap', 'React'],
    Tools: ['Git', 'SQL', 'MongoDB', 'Android Studio'],
};

const Skills = () => (
    <Container className="my-5">
        <h2>Skills</h2>
        <Row>
            {Object.keys(skills).map(category => (
                <Col md={4} key={category}>
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>{category}</Card.Title>
                            <Card.Text>{skills[category].join(', ')}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
);
export default Skills;