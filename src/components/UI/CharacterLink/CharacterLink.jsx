import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CharacterLink.module.css'

const CharacterLink = ({children, ...props}) => {
    return ( 
        <Link className={styles.link} {...props} >{children}</Link>
     );
}
 
export default CharacterLink;