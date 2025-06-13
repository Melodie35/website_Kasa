import React from 'react';
import { Link } from 'react-router-dom'

import '@assets/style_components/cards.css'

const Cards = ({gal}) => {
    return (
        <Link to={`/Logement/${gal.id}`} className='classLink'>
            <article className='galleryArticle' id={gal.id}>
                <img src={gal.cover} alt={gal.title}/>
                <h2>{gal.title}</h2>            
            </article>
        </Link>
    )
}

export default Cards;