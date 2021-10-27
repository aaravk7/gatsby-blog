import React from 'react';
import { Link } from 'gatsby';

import { navList, link, titleLink, activeLink, header } from './header.module.scss';

const Header = () => {
    return (
        <header className={header}>
            <h1><Link className={titleLink} to='/'>Aarav Khokhar</Link></h1>
            <nav>
                <ul className={navList}>
                    <li>
                        <Link className={link} activeClassName={activeLink} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={link} activeClassName={activeLink} to='/about'>About</Link>
                    </li>
                    <li>
                        <Link className={link} activeClassName={activeLink} to='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link className={link} activeClassName={activeLink} to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
