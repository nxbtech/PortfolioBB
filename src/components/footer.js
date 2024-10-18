import React from 'react';
import '../styles/footer.scss'; // Assure-toi que le fichier CSS est bien configuré
import NexaLogo from '../components/Images/logo-nxb.png'; // Assure-toi du bon chemin pour l'image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        {/* Logo */}
        <img src={NexaLogo} alt="Nexabridge Logo" className="footer__logo" />

        {/* Liens */}
        <ul className="footer__links">
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#services">Mes services</a></li>
          <li><a href="#contact">Contactez-moi</a></li>
        </ul>
      </div>

      <div className="footer__quote">
        <p>« Le génie, c'est l'enfance retrouvée à volonté. » — Charles Baudelaire</p>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Benjamin Brassart - Tous droits réservés.</p>
        <p>
          <a href="#privacy">Politique de confidentialité</a> | <a href="#legal">Mentions légales</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;