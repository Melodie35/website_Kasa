import React from 'react';

import '@assets/style_components/banner.css'

const Banner = ({ title, imageSRC }) => {
    return (
        <div className='banner'>
                <img src={imageSRC} alt="Bannière"/>
                <h1>{title}</h1>
        </div>   
    );
};

export default Banner;