import React from 'react';

import '@assets/style_components/banner.css'

const Banner = ({ title, imageSRC }) => {
    return (
        <div className='banner'>
                <img src={imageSRC} data-testid='banner-image' alt="Bannière"/>
                <img src="/images/Background.png"/>
                <h1>{title}</h1>
        </div>   
    );
};

export default Banner;