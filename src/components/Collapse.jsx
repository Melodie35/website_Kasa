import React, { useState } from 'react';

import '@assets/style_components/collapse.css'


const Collapse = ({ title, description }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className='collapse'>
            <div className='dropTitle'>
                <h2>{title}</h2>
                <button onClick={() => {setOpen(!open)}}>
                    <img className="dropChevron" src={open ? '/images/chevron-down.png' : '/images/chevron-up.png'} alt="Chevron"/>
                </button>        
            </div>
                            
            <div className={`dropMenu ${open ? 'active' : 'inactive'}`}>
                {Array.isArray(description) ? (
                    <ul>
                        {description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{description}</p>
                )}
            </div>
        </div>
    );
};

export default Collapse;