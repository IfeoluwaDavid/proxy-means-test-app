

import React from 'react'
import { Card } from 'react-bootstrap'
import styles from '../components/nav-bar.module.css';

const NavBar = ({ navTitle }) => {
    return (
        <Card.Header>
            <Card.Title className={styles.title}>{navTitle}</Card.Title>
        </Card.Header>
    )
}

export default NavBar