import React from 'react';
import MainCard from '../components/Servicesx/MainCard';
import SecondCard from '../components/Servicesx/SecondCards';
import ServiceImg from '../components/Servicesx/ServiceImg';
import ServiceContent from '../components/Servicesx/Content';
import '../styles/servicesx.scss';

function CombinedComponent() {
  return (
    <div id="servicesx" className="combinedComponent">

      {/* Contenu de service */}
      <div className="combinedComponent__content">
        <ServiceContent 
          title="MES SERVICES SUR MESURE"
          content="Chaque projet est unique. Que vous soyez une startup cherchant à se développer rapidement ou une entreprise souhaitant moderniser ses outils, je vous accompagne avec des solutions digitales adaptées à vos besoins."
        />
      </div>

      {/* Carte principale */}
      <div className="combinedComponent__mainCard">
        <MainCard 
          title="DÉVELOPPEMENT FULLSTACK"
          content="Je conçois des applications web innovantes et évolutives en utilisant React et Node.js pour garantir une performance optimale et une évolutivité qui accompagne la croissance de votre entreprise."
        />
      </div>

      {/* Première SecondCard avec fond orange */}
      <div className="combinedComponent__secondCard combinedComponent__secondCard--orange">
        <SecondCard 
          title="Pilotage"
          content="De la planification à la livraison, j’assure la gestion complète de vos projets digitaux, avec une exécution rapide et de qualité." 
          color="#FF8200" 
        />
      </div>

      {/* Deuxième SecondCard avec fond violet */}
      <div className="combinedComponent__secondCard combinedComponent__secondCard--violet">
        <SecondCard 
          title="Performances"
          content="J’optimise vos plateformes pour garantir des performances élevées, adaptées au SEO et prêtes à évoluer avec votre business."
          color="#9372FF"
        />
      </div>

      {/* Image de service */}
      <div className="combinedComponent__serviceImg">
        <ServiceImg />
      </div>

    </div>
  );
}

export default CombinedComponent;