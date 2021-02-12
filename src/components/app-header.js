import React from 'react'
import { Header } from 'semantic-ui-react'
import styles from '../styles/styles.module.css';

const AppHeader = () => {
    return <div className={styles.appHeader} >
        <Header as='h1' textAlign='center'>
            Proxy Means Test
        </Header>
    </div>

}

export default AppHeader