import React from 'react';
import NexabridgeCollapse from '../components/About/AboutCarousel'; // Import du système de collapse
import NexabridgeRight from '../components/About/AboutImg'; // Partie droite (image ou autre contenu)
import '../styles/nexabridge.scss'; // Styles globaux de la page

const Nexabridge = () => {
  return (
    <div className="nexabridge-page">
      {/* Partie gauche - collapse */}
      <div className="nexabridge-page__left">
        <NexabridgeCollapse />
      </div>

      {/* Partie droite - autre contenu */}
      <div className="nexabridge-page__right">
        <NexabridgeRight />
      </div>
    </div>
  );
};

export default Nexabridge;