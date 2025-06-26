import React, { useState } from 'react';

import '@assets/style_components/dropdown.css'


const Dropdown = ({ title, description }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className='dropdown'>
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

export default Dropdown;