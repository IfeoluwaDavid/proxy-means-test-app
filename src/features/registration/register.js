import React from 'react'
import { Link } from "react-router-dom";
import { Form, Button, Col } from 'react-bootstrap'

import styles from '../registration/register.module.css'
import NavBar from '../../components/nav-bar.js'
import Container from '../../components/container.js'

const Register = () => {
    return (
        <Container>
            <NavBar navTitle="Sign Up" />
            <Form>
                <Form.Row>
                    <Form.Group className={styles.group} as={Col} controlId="formGridEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className={styles.group} as={Col} controlId="formGridPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group className={styles.group} as={Col} controlId="formGridPassword">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group className={styles.group} as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group className={styles.group} as={Col} controlId="formGridCity">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Form.Group className={styles.group}>
                    <Link to="/register">
                        <Button variant="secondary" size="md" block>
                            Sign Up
                        </Button>
                    </Link>
                    <Link to="/login">
                        <Button variant="outline-secondary" size="md" block>
                            Login
                        </Button>
                    </Link>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default Register