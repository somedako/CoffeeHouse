import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Footer.module.css';
import icon from '../icons/dark-beans-logo.svg';

const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className="container">
                <nav className={styles.navFooter}>
                    <NavLink className={styles.footerNavLink} to="/">
                        Coffe house
                    </NavLink>

                    <NavLink className={styles.footerNavLink} to="about">
                        Our coffee
                    </NavLink>

                    <NavLink className={styles.footerNavLink} to="pleasure">
                        For your pleasure
                    </NavLink>
                </nav>

                <img src={icon} alt="icon" />
            </div>
        </div>
    );
};

export default Footer;
