import React from 'react'
import { Link  } from 'react-router-dom'
import styles from './GoBack.module.css'


const GoBAckLink = ({children, to, ...props}) => {


    return (
        <Link to={to} {...props} 
        className={styles.link}
        >
            {children}
        </Link>
    );
}
 
export default GoBAckLink;