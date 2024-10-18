import React from 'react';
import './styles/contactImg.scss';
import contactImage from '../Images/nxn-img10.png'; // Modifie le chemin selon l'emplacement de ton image
import { FaMapMarkerAlt } from 'react-icons/fa'; // Exemple pour importer une icône de localisation

function ContactImg() {
  return (
    <div className="contact-img">
      <div className="contact-img__image">
        <img src={contactImage} alt="Benjamin Brassart Contact" />
      </div>
      <div className="contact-img__content">
        <div className="contact-img__txt">
          BENJAMIN BRASSART, DÉVELOPPEUR WEB FULLSTACK SPÉCIALISÉ EN CRÉATION D'APPLICATIONS WEB MODERNES
        </div>
        <div className="contact-img__localisation">
          <FaMapMarkerAlt /> {/* Icône de localisation */}
            Toulouse, France
        </div>
      </div>
    </div>
  );
}

export default ContactImg;