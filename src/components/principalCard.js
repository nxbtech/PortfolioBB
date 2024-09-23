import React from 'react';
import '../styles/principalCard.scss';
import CtaButton from '../components/ctaButton';
import imageFirstCard from '../images/img-nxb3.jpg';

function PrincipalCard() {
  return (
    <div className="first-card">
      <div className="first-card__image">
        <img src={imageFirstCard} alt="Nexabridge" />
      </div>
      <div className="first-card__h3">VOTRE PARTENAIRE</div>
      <div className="first-card__text">
      Expertise indépendante au service de votre transition digitale.
      </div>
      <div className="first-card__button">
        <CtaButton text="NOS SERVICES" onClick={() => alert('CTA Button clicked!')} />
      </div>
    </div>
  );
}

export default PrincipalCard;