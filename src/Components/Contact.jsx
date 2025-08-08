import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';


const Contact = () => (
    <Container className="card " >
        <div className="card-body">
            <h2 className="text-center display-6">Contact Me</h2>

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
        </div>
    </Container>
);
export default Contact;