import React from 'react';
import PrincipalCard from '../components/principalCard'; // Importation du composant PrincipalCard
import TopCard from '../components/top-card.js'; // Importation du composant TopCard
import BottomCard from '../components/bottomCard'; // Importation du composant BottomCard
import '../styles/home.scss'; // Importation des styles


function Home() {
  return (
    <div className="home-grid">
      <div className="principal-card">
        <PrincipalCard />
      </div>
      <div className="top-card">
        <TopCard />
      </div>
      
      {/* Ajout des deux BottomCards */}
      <div className="bottom-card1">
        <BottomCard title="À Propos" content="DÉCOUVREZ NOTRE HISTOIRE" color="#9372FF" />
      </div>
      <div className="bottom-card2">
        <BottomCard title="Contact" content="BESOIN DE RENSEIGNEMENTS ?" color="#FF8200" />
      </div>

    </div>
  );
}

export default Home;