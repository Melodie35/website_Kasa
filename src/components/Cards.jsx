import React, { useEffect, useState } from 'react';

const Cards = () => {
    const [gallery, setGallery] = useState({})
    useEffect(() => {
        fetch(`http://localhost:8080/api/properties`)
            .then((response) => response.json()
                .then((data) => setGallery(data))
                .catch((error) => console.log(error))
            )        
    },[])


    return (
        <div>
            {gallery.map(img => (
                <div key={img.id}>
                    <img src={img.cover} alt={img.title}/>
                    <h2>{img.title}</h2>
                </div>
            ))}
        </div>
    )
}

export default Cards;