import React from 'react';
import './styles/principalCard.scss';
import CtaButton from '../ctaButton';
import imageFirstCard from '../Images/prtfl-1.jpg';

function PrincipalCard() {
  // Fonction qui fait défiler vers la section "servicesx"
  const scrollToServices = () => {
    const servicesSection = document.getElementById('servicesx');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="first-card">
      <div className="first-card__image">
        <img src={imageFirstCard} alt="Benjamin Brassart" />
      </div>
      <div className="first-card__h3">DÉVELOPPEUR WEB</div>
      <div className="first-card__text">
        Création d'applications web & mobile modernes
      </div>
      <div className="first-card__button">
        <CtaButton text="MES SERVICES" onClick={scrollToServices} />
      </div>
    </div>
  );
}

export default PrincipalCard;