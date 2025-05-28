import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Mental Health Support',
        description: 'A MERN stack web app for mental health assistance, enabling user registration and secure data storage.',
        tech: 'MongoDB, Express.js, React.js, Node.js',
        link: 'https://github.com/Chethan-v07/mental-health-support',
    },
    {
        title: 'Software Consultancy',
        description: 'A platform connecting users with software developers, built with HTML, CSS, PHP, and MySQL.',
        tech: 'HTML, CSS, PHP, MySQL',
        link: '#',
    },
    {
        title: 'Cloud Storage',
        description: 'A mobile app for secure file storage using Android Studio, XML, Kotlin, and AI.',
        tech: 'Android Studio, XML, Kotlin, AI',
        link: '#',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const Projects = () => (
    <Container className="my-5">
        <h2 className="text-center mb-4 projects-heading">Projects</h2>
        <Row>
            {projects.map((project, index) => (
                <Col md={4} key={project.title}>
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="mb-3 project-card">
                            <Card.Body>
                                <Card.Title className="project-title">{project.title}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                                <Card.Text><strong>Tech:</strong> {project.tech}</Card.Text>
                                <Button href={project.link} target="_blank" variant="primary">View Project</Button>
                            </Card.Body>
                        </Card>
                    </motion.div>
                </Col>
            ))}
        </Row>
    </Container>
);

export default Projects;