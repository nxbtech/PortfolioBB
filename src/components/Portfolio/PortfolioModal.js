import React from 'react';
import './styles/portfolioModal.scss';

const PortfolioModal = ({ project, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{project.title}</h2>
        <p>{project.content}</p>
        <div className="technologies">
          <h3>Technologies :</h3>
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <button className="close-button" onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default PortfolioModal;