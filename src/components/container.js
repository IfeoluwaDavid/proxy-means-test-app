import React from 'react'
import { Card } from 'react-bootstrap'
import styles from '../components/container.module.css';

const Container = ({ children }) => {
    return (
        <div>
            <Card className={styles.card}>
                <Card.Body>
                    {children}
                </Card.Body>
            </Card>
        </div >
    )
}

export default Container