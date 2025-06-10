import React from 'react';

import '@assets/style_components/cards.css'

const Cards = ({gal}) => {
    return (
        <article className='galleryArticle' id={gal.id}>
            <img src={gal.cover} alt={gal.title}/>
            <h2>{gal.title}</h2>
        </article>
    )
}

export default Cards;