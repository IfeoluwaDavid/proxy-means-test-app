import React from 'react'
import { Button, Select, Input } from 'semantic-ui-react'
import styles from '../styles/styles.module.css';

const options = [
    { key: 'all', text: 'All', value: 'all' },
    { key: 'articles', text: 'Articles', value: 'articles' },
    { key: 'products', text: 'Products', value: 'products' },
]

const SearchField = () => (
    <div className={styles.searchfield}>
        <Input fluid height="10" type='text' placeholder='Search...' action>
            <input />
            <Select compact options={options} defaultValue='articles' />
            <Button type='submit'>Search</Button>
        </Input>
    </div >
)

export default SearchField