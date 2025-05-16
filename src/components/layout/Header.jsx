import React from 'react';
import { Link } from 'react-router-dom'

import './header.css'

const Header = () => {
    return (
        <header>
                <nav>
                    <ul>
                        <li><Link to="/Home">Accueil</Link></li>
                        <li><Link to="/Apropos">A propos</Link></li>
                    </ul>
                </nav>
        </header>
    );
};

export default Header;