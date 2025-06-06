import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
import gmailIcon from '../assets/gmail.svg';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => (
    <Container className="my-5">
        <h2>Contact Me</h2>

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
        <p><img src={gmailIcon} height="30" width="30" /> vchethanv01983@gmail.com</p>

        <p><img src={linkedinIcon} height="30" width="30" /><a href="https://github.com/Chethan-v07" target="_blank">GitHub</a></p>
        <p><img src={githubIcon} height="25" width="30" /> <a href="https://linkedin.com/in/Chethanv07" target="_blank">LinkedIn</a></p>
    </Container>
);
export default Contact;