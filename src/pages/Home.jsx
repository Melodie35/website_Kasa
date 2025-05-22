import React from 'react'

import Banner from '@components/Banner.jsx'
import Cards from '@components/Cards.jsx'

const Home = () => {
    return (
        <>               
            <main className="home">
                <Banner
                    title="Chez vous, partout et ailleurs"
                    imageSRC="/images/Banner1.png"
                />
                
                Page d'accueil
                <Cards/>
            </main>
        </>
    );
};

export default Home;