import React from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import styles from '../applications/all-applications.module.css';
import NavBar from '../../components/container.js';

const AllApplications = () => {
    return (
        <NavBar navTitle="Your Applications">
            <Form>
                <Form.Row>
                    <Form.Group className={styles.group} as={Col} controlId="formGridEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className={styles.group}>
                        <Button variant="secondary" size="md" block>
                            Sign Up
                        </Button>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control as="select" multiple>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group className={styles.group}>
                    <Button variant="secondary" size="md" block>
                        Open
                    </Button>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col}>
                        <Button className={styles.inlineButton} variant="outline-secondary" size="md" inline>
                            Fill New Application
                        </Button>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Button className={styles.inlineButton} variant="outline-secondary" size="md">
                            Withdraw Application
                        </Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </NavBar>
    )
}

export default AllApplications