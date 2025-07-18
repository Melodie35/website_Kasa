import React, { useEffect, useState, useRef } from 'react'

import { logementService } from '@services/logement.service'
import Banner from '@components/Banner.jsx'
import Cards from '@components/Cards.jsx'

import '@assets/style_pages/home.css'

const Home = () => {
    const [gallery, setGallery] = useState()
    const flag = useRef(false)
    const [isLoad, setLoad] = useState(false)

    useEffect(() => {
        if(flag.current === false){
            logementService.getAllLogement()
                .then((response) => response.json()
                    .then((data) => {
                        setGallery(data)
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
        <div className="home">
            <Banner
                title="Chez vous, partout et ailleurs"
                imageSRC="/images/Banner1.png"
            />

            <div className='homeGallery'>
                {
                    gallery.map(gal => (
                        <Cards key={gal.id} gal={gal}/>
                    ))
                }
            </div>     
        </div>
    )
}

export default Home;