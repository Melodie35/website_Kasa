import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';

import '@assets/style_pages/logement.css'

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
                    <p className='sliderText'>{index+1}/{logement.pictures.length}</p>                
                </div>
                                    
                <div className='logDetails'>
                    <div>
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                    </div>                  
                    <div className='logTags'>{logement.tags}</div>
                </div>

                <div className='logHost'>
                <div>
                    <p>{logement.host.name}</p>
                    <img src={logement.host.picture}/>
                </div>
                <div>{logement.rating}</div>
            </div>
            </section>
                                   
            <section className='logSecondSec'>
                <div>
                     <h2>Description</h2>
                     <p>{logement.description}</p>
                </div>
                <div>
                     <h2>Équipements</h2>
                     <p>{logement.equipments}</p>
                </div>
            </section>            
        </article>
    );
};

export default Logement;