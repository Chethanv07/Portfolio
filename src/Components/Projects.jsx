// src/components/Projects.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projects = [
    {
        title: 'Mental Health Support',
        description: 'A MERN stack web app for mental health assistance, enabling user registration and secure data storage.',
        tech: 'MongoDB, Express.js, React.js, Node.js',
        link: 'https://github.com/Chethan-v07/mental-health-support', // Replace with actual link
    },
    {
        title: 'Software Consultancy',
        description: 'A platform connecting users with software developers, built with HTML, CSS, PHP, and MySQL.',
        tech: 'HTML, CSS, PHP, MySQL',
        link: '#', // Add link if available
    },
    {
        title: 'Cloud Storage',
        description: 'A mobile app for secure file storage using Android Studio, XML, Kotlin, and AI.',
        tech: 'Android Studio, XML, Kotlin, AI',
        link: '#', // Add link if available
    },
];

const Projects = () => (
    <Container className="my-5">
        <h2>Projects</h2>
        <Row>
            {projects.map(project => (
                <Col md={4} key={project.title}>
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>{project.description}</Card.Text>
                            <Card.Text><strong>Tech:</strong> {project.tech}</Card.Text>
                            <Button href={project.link} target="_blank" variant="primary">View Project</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
);
export default Projects;