import React from 'react';
import headerStyles from './header.module.css';

const Header = () => (
    <div>
        <h1 className={headerStyles.title}>CSS Modules</h1>
        <ul className={headerStyles['menu-items']}>
            <li>
                <a href="/#" className={`${headerStyles['bold']} ${headerStyles['active']}`}>
                    Home
                </a>
            </li>
            <li>
                <a href="/#">About Me</a>
            </li>
            <li>
                <a href="/#">Contact Us</a>
            </li>
        </ul>
    </div>
);

export default Header;
