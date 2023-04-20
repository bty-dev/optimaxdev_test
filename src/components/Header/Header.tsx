import React from 'react';

import classes from './Header.module.scss';
import logo from '../../assets/logo.png';

const Header = () => {

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <img className={classes.header__logo} src={logo} alt="Logo"/>
                <nav className={classes.nav}>
                    <ul className={classes.nav__list}>
                        <li className={classes.nav__link}>Home</li>
                        <li className={classes.nav__link}>Cart</li>
                        <li className={classes.nav__link}>Log out</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;