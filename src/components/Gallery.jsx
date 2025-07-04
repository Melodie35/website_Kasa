import React, { useState } from 'react'

import '@assets/style_components/gallery.css'

const Gallery = ({ images, altTitle } ) => {

    //Gestion des slides du Carroussel
    const [index, setIndex] = useState(0)
    let length = images.length

    const prevImage = () => {
        let newIndex = index - 1
        setIndex(newIndex < 0 ? length - 1 : newIndex)
    }
    const nextImage = () => {
        let newIndex = index + 1
        setIndex(newIndex >= length ? 0 : newIndex)
    } 

    return (
        <div className='gallery'>
            {length > 1 && (
                <button onClick={prevImage}>
                    <img className='arrow arrowBack' src="/images/arrow_back.png" alt="Flèche gauche"/>
                </button>
            )}

            <img className='slider' data-testid='slider' src={images[index]} alt={altTitle}/>
            
            {length > 1 && (
                <p className='sliderText'>{index+1}/{length}</p>
            )}                

            {length > 1 && (
                <button onClick={nextImage}>
                    <img className='arrow arrowForward' src="/images/arrow_forward.png" alt="Flèche droite"/>
                </button>
            )}                
        </div>
    );
};

export default Gallery;