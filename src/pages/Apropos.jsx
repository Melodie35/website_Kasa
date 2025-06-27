import React from 'react';

import Banner from '@components/Banner.jsx';
import Collapse from '@components/Collapse.jsx';

import '@assets/style_pages/apropos.css'

const Apropos = () => {
    return (
        <div className='apropos'>
            <Banner
                title=""
                imageSRC="/images/Banner2.png"
            />

            <section className='serieDropMenu'>
                <Collapse
                    title="Fiabilité"
                    description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                /><br/>
                <Collapse
                    title="Respect"
                    description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                /><br/>
                <Collapse
                    title="Service"
                    description="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
                /><br/>
                <Collapse
                    title="Sécurité"
                    description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                /><br/>
            </section>
        </div>
    
    );
};

export default Apropos;