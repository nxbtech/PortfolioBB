import React from 'react';
import FeatureCard from '../components/featureCard'; // Assure-toi que le chemin vers FeatureCard est correct
import '../styles/feature.scss'; // Si tu as un style spécifique pour Feature.js

function Feature() {
  return (
    <div className="feature">
      <div className="feature__cards">
        <FeatureCard 
          titre="GESTION DE PROJETS IT" 
          content="Pilotez vos projets avec efficacité" 
          imgSrc="/images/nxp-img6.png" // Ajout de l'image
        />
        <FeatureCard 
          titre="TRANSFORMATION DIGITALE" 
          content="Accélérez votre digitalisation" 
          imgSrc="/images/img-nxb8.png" // Ajout de l'image
        />
        <FeatureCard 
          titre="FLEXIBILITE ET SUIVI" 
          content="Un accompagnement sur-mesure" 
          imgSrc="/images/img-nxb1.png" // Ajout de l'image
        />
                <FeatureCard 
          titre="INNOVATION ET AGILITE" 
          content="Restez agile et innovant" 
          imgSrc="/images/img-nxb1.png" // Ajout de l'image
        />
      </div>
    </div>
  );
}

export default Feature;