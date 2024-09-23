import React from 'react';
import '../styles/grid-about.scss'; // Le fichier CSS pour la grille

const GridAbout = ({ children }) => {
  return (
    <div className="grid-about">
      {children} {/* Les cartes seront passées ici comme enfants */}
    </div>
  );
};

export default GridAbout;