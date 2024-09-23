import React from 'react';
import ContactForm from '../components/contact-form'; // Assure-toi que le chemin est correct
import ContactImg from '../components/contact-img'; // Assure-toi que le chemin est correct
import '../styles/contact.scss'; // Si tu as des styles pour la section contact

const Contact = () => {
  return (
    <section className="contact-section">
      {/* Formulaire de contact */}
      <ContactForm />

            {/* Composant d'image avec texte */}
            <ContactImg />
    </section>
  );
};

export default Contact;