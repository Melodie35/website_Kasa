import React from 'react';
import { Link , NavLink } from 'react-router-dom'

import '@assets/style_components/header.css'

const Header = () => {
    return (
        <header>
            <img src="/images/LOGO.png" alt="Logo KASA"/>
            <nav>
                <ul>
                    <li ><NavLink 
                        to="/Home" 
                        className={({ isActive }) =>
                            isActive ? "active" : ""                        
                        }
                    >
                        Accueil
                    </NavLink></li>
                    <li ><NavLink 
                        to="/Apropos" 
                        className={({ isActive }) =>
                            isActive ? "active" : ""                        
                        }
                    >
                        A propos
                    </NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;