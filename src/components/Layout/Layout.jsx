import React from 'react';
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.css'
import CustomLink from '../UI/CustomLink/CustomLink';

const Layout = () => {

    return ( 
        <>
        <header className={styles.layout}>
            <CustomLink className={styles.item} to='/'>Home</CustomLink>
            <CustomLink className={styles.item} to='/about'>About</CustomLink>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <p className={styles.footerTitle}><a className={styles.footerLink} rel="noreferrer" target="_blank" href='https://finalspaceapi.com' >Final Space API</a></p>
        </footer>
        </>
     );
}
 
export default Layout;