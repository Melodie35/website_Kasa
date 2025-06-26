import React from 'react'

import '@assets/style_components/rating.css'

const Rating = ({ rating }) => {
    let numberRating = parseInt(rating)
    const orangeStar = "/images/FullStar.png"
    const whiteStar = "/images/EmptyStar.png"

    const allFullStars = new Array(numberRating).fill(orangeStar)
    const allEmptyStars = new Array(5-numberRating).fill(whiteStar)

    return (
        <div className='rating'>
            {allFullStars.map((fullStar, index) => (
                <img key={index} src={fullStar}/>
            ))}
            {allEmptyStars.map((emptyStar, index) => (
                <img key={index} src={emptyStar}/>
            ))}
        </div>
    );
};

export default Rating;