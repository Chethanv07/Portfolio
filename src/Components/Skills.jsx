import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faPython, faJs, faHtml5, faCss3Alt, faBootstrap, faReact, faNodeJs, faGit } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';

// Merged skills array (no category names)
const skills = [
    'Core Java', 'Python', 'JavaScript', 'HTML', 'CSS',
    'Bootstrap', 'React', 'Node.js', 'Express.js',
    'Git', 'SQL', 'MongoDB', 'Android Studio', 'VS Code'
];

const skillIcons = {
    'corejava': faJava,
    'python': faPython,
    'javascript': faJs,
    'html': faHtml5,
    'css': faCss3Alt,
    'bootstrap': faBootstrap,
    'react': faReact,
    'node.js': faNodeJs,
    'express.js': faNodeJs,
    'git': faGit,
    'sql': faDatabase,
    'mongodb': faDatabase,
    'androidstudio': faCode,
    'vscode': faCode
};

const pillVariants = {
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

const Skills = () => (
    <Container className="my-5">
        <h2 className="display-3 fw-bold mb-4 text-center text-black">Skills</h2>
        <Row className="justify-content-center">
            {skills.map((skill, skillIndex) => {
                const formattedSkill = skill.toLowerCase().replace(/\s+/g, '');
                return (
                    <Col xs="auto" key={skillIndex} className="mb-2">
                        <motion.div
                            variants={pillVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: skillIndex * 0.1 }}
                        >
                            <Badge pill className="p-2 skill-badge text-black bg-light border">
                                {skillIcons[formattedSkill] && (
                                    <FontAwesomeIcon icon={skillIcons[formattedSkill]} style={{ marginRight: '8px', color: 'black' }} />
                                )}
                                {skill}
                            </Badge>
                        </motion.div>
                    </Col>
                );
            })}
        </Row>
    </Container>
);

export default Skills;
