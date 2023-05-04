import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Nav.module.css';

const Nav: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <NavLink className={styles.navLink} to="/">
                Coffe house
            </NavLink>

            <NavLink className={styles.navLink} to="about">
                Our coffee
            </NavLink>

            <NavLink className={styles.navLink} to="pleasure">
                For your pleasure
            </NavLink>
        </nav>
    );
};

export default Nav;
