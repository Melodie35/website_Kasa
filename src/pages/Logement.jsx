import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';

import '@assets/style_pages/logement.css'
import Dropdown from '@components/Dropdown';
import Rating from '@components/Rating';

const Logement = () => {
    const [logement, setLogement] = useState({})
    const [index, setIndex] = useState(0)
    const flag = useRef(false)
    const [isLoad, setLoad] = useState(false)
    let {lid} = useParams()

    
    
    useEffect(() => {
        if(flag.current === false){
            fetch(`http://localhost:8080/api/properties/${lid}`)
                .then((response) => response.json()
                    .then((data) => {
                        console.log(data)
                        setLogement(data)
                        setLoad(true)
                })
                .catch((error) => console.log(error))
            )   
        }
            
        return () => flag.current = true
    },[])
    
    if(!isLoad){
        return <div>Chargement...</div>
    }

    
    const length = logement.pictures.length
    const prevImage = () => {
        let newIndex = index - 1
        setIndex(newIndex < 0 ? length - 1 : newIndex)
        console.log("click sur le bouton gauche")
    }
    const nextImage = () => {
        let newIndex = index + 1
        setIndex(newIndex >= length ? 0 : newIndex)
        console.log("click sur le bouton droite")
    }


    return (
        <article className='logement' id={logement.id}>
            <section className='logFirstSec'>
                <div className='logImage'>
                    <img className='slider' src={logement.pictures[index]} alt={logement.title}/>
                    <button onClick={prevImage}>
                        <img className='arrow arrowBack' src="/images/arrow_back.png" alt="Flèche gauche"/>
                    </button>
                    <button onClick={nextImage}>
                        <img className='arrow arrowForward' src="/images/arrow_forward.png" alt="Flèche droite"/>
                    </button>
                    <p className='sliderText'>{index+1}/{length}</p>                
                </div>

                <div className='logSubFirstSec'>                    
                    <div className='logDetails'>
                        <div>
                            <h1>{logement.title}</h1>
                            <p>{logement.location}</p>
                        </div>                  
                        <ul className='logTags'>
                            {logement.tags.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className='logHostRating'>
                        <div className='logHost'>
                            <p>{logement.host.name}</p>
                            <img src={logement.host.picture}/>
                        </div>
                        <Rating
                            rating={logement.rating}
                        />
                    </div>
                </div>

                
            </section>
                                   
            <section className='logSecondSec'>
                <Dropdown
                    title="Description"
                    description={logement.description}
                />
                <Dropdown
                    title="Équipements"
                    description={logement.equipments}
                />
            </section>            
        </article>
    );
};

export default Logement;