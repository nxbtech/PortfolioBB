import React from 'react';
import './styles/portfolioCard.scss';

const PortfolioCard = ({ title, content, img, date, onClick }) => {
  // Formatage de la date pour un affichage lisible
  const formattedDate = date ? new Date(date).toLocaleDateString() : 'Date non disponible';

  return (
    <div className="portfolio-card" onClick={onClick}>
      <img src={img} alt={title} />
      <div className="portfolio-card-body">
        <h4>{title}</h4>
        <p className="portfolio-card-date">{formattedDate}</p> {/* Ajout de la date */}
        <p>{content}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;