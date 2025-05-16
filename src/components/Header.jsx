import React from 'react';
import { Link } from 'react-router-dom'

import '@assets/style_components/header.css'

const Header = () => {
    return (
        <header>
            <img src="/images/LOGO.png" alt="Logo KASA"/>
            <nav>
                <ul>
                    <li className='accueil'><Link to="/Home">Accueil</Link></li>
                    <li><Link to="/Apropos">A propos</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;