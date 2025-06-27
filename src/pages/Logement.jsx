import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router';

import '@assets/style_pages/logement.css'
import { logementService } from '@services/logement.service'
import Gallery from '@components/Gallery';
import Collapse from '@components/Collapse';
import Rating from '@components/Rating';

const Logement = () => {
    let {lid} = useParams()
    const navigate = useNavigate()
    const [logement, setLogement] = useState({})    
    const flag = useRef(false)
    const [isLoad, setLoad] = useState(false)
    
    // Appel de l'API avec les détails du logement :   
    useEffect(() => {
        if(flag.current === false){
            logementService.getLogement(lid)
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


    return (
        <article className='logement' id={logement.id}>
            <section className='logFirstSec'>
                <Gallery
                    images = {logement.pictures}
                    altTitles = {logement.title}
                />

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