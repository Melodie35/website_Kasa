import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';

const Logement = () => {
    const [logement, setLogement] = useState({})
    const flag = useRef(false)
    const [isLoad, setLoad] = useState(false)
    let {lid} = useParams()
    
    useEffect(() => {
        if(flag.current === false){
            fetch('http://localhost:8080/api/properties/'+lid)
                .then((response) => response.json()
                    .then((data) => {
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

    return (
        <article className='logArticle' id={logement.id}>
            <img src={logement.cover} alt={logement.title}/>

            <section className='logFirstSec'>
                <div>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                </div>
                <div>{logement.tags}</div>
            </section>
            
            <section className='logSecondSec'>
                <div>
                    <p>{logement.host.name}</p>
                    <img src={logement.host.picture}/>
                </div>
                <div>{logement.rating}</div>
            </section>
            
            <section className='logThirdSec'>
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