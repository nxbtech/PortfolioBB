import React from 'react';
import logo from '../components/Images/logo-nxb.png'; // Assure-toi que le chemin est correct
import '../styles/underDevelopment.scss'; // Assure-toi d'ajouter le style CSS correspondant

const UnderDevelopment = () => {
  return (
    <div className="under-development">
      {/* Logo en haut */}
      <div className="under-development__header">
        <img src={logo} alt="Nexabridge Logo" className="under-development__logo" />
      </div>

      {/* Contenu principal */}
      <div className="under-development__content">
        <h1>Nous arrivons bientôt !</h1>
        <p>La version mobile est en cours de construction. Restez connecté pour découvrir une expérience utilisateur optimisée.</p>
      </div>

      {/* Animation discrète en bas */}
      <div className="under-development__animation">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default UnderDevelopment;