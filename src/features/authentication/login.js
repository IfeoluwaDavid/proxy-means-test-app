import React from 'react'
import { Link } from "react-router-dom";
import { Form, Button } from 'react-bootstrap'

import styles from '../authentication/login.module.css';
import Container from '../../components/container.js';
import NavBar from '../../components/nav-bar.js';

const Login = () => {
    return (
        <Container >
            <NavBar navTitle="Login" />
            <Form>
                <fieldset>
                    <Form.Group className={styles.group}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className={styles.group}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className={styles.group}>
                        <Link to="/login">
                            <Button variant="secondary" size="md" block>
                                Login
                            </Button>
                        </Link>
                        <Link to="/register">
                            <Button variant="outline-secondary" size="md" block>
                                Register
                            </Button>
                        </Link>
                    </Form.Group>
                </fieldset>
            </Form >
        </Container>
    )
}

export default Login