import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router';

import '@assets/style_pages/logement.css'
import Collapse from '@components/Collapse';
import Rating from '@components/Rating';

const Logement = () => {
    let {lid} = useParams()
    const navigate = useNavigate()
    const [logement, setLogement] = useState({})    
    const flag = useRef(false)
    const [isLoad, setLoad] = useState(false)
    const [error, setError] = useState(false)
    const [index, setIndex] = useState(0)


    // Appel de l'API avec les détails du logement :   
    useEffect(() => {
        if(flag.current === false){
            fetch(`http://localhost:8080/api/properties/${lid}`)
                .then((response) => response.json()
                    .then((data) => {
                        if (response.ok) {
                            setLogement(data) 
                            setLoad(true)
                        } else {
                            navigate('/error')
                        }
                        
                })
                .catch((err) => console.log(err))
            )   
        }
            
        return () => flag.current = true
    },[])

    if(!isLoad){
        return <div>Chargement...</div>
    }



    //Gestion des slides du Carroussel
    let length = logement.pictures.length

    const prevImage = () => {
        let newIndex = index - 1
        setIndex(newIndex < 0 ? length - 1 : newIndex)
    }
    const nextImage = () => {
        let newIndex = index + 1
        setIndex(newIndex >= length ? 0 : newIndex)
    } 


    return (
        <article className='logement' id={logement.id}>
            <section className='logFirstSec'>
                <div className='logImage'>
                    {length > 1 && (
                        <button onClick={prevImage}>
                            <img className='arrow arrowBack' src="/images/arrow_back.png" alt="Flèche gauche"/>
                        </button>
                    )}

                    <img className='slider' src={logement.pictures[index]} alt={logement.title}/>
                    <p className='sliderText'>{index+1}/{length}</p>

                    {length > 1 && (
                        <button onClick={nextImage}>
                            <img className='arrow arrowForward' src="/images/arrow_forward.png" alt="Flèche droite"/>
                        </button>
                    )}                
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
                <Collapse
                    title="Description"
                    description={logement.description}
                />
                <Collapse
                    title="Équipements"
                    description={logement.equipments}
                />
            </section>            
        </article>
    );
};

export default Logement;