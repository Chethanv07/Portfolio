import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => (
    <Container className="my-5">
        <h2>Contact Me</h2>
        <p><FaEnvelope /> vchethanv01983@gmail.com</p>
        <p><FaPhone /> +91-8088228208</p>
        <p><FaGithub /> <a href="https://github.com/Chethan-v07" target="_blank">GitHub</a></p>
        <p><FaLinkedin /> <a href="https://linkedin.com/in/Chethanv07" target="_blank">LinkedIn</a></p>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message" />
            </Form.Group>
            <Button variant="primary" type="submit">Send</Button>
        </Form>
    </Container>
);
export default Contact;