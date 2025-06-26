import React from 'react';
import { NavLink } from 'react-router-dom'

import '@utils/error.css'

const Error = () => {
    return (
        <div className='error'>
            <h1>404</h1>
            <p>Oups! La page que <br/> vous demandez n'existe pas.</p>
            <NavLink to="/Home" className="homeLink">
                Retourner sur la page d’accueil        
            </NavLink>
        </div>
    );
};

export default Error;