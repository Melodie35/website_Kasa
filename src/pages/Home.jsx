import React from 'react'

import Banner from '@components/Banner.jsx'

const Home = () => {
    return (
        <>               
            <main className="home">
                <Banner
                    title="Chez vous, partout et ailleurs"
                    imageSRC="/images/Banner1.png"
                />
                
                Page d'accueil
            </main>
        </>
    );
};

export default Home;