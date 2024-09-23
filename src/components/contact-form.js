import React, { useState } from 'react';
import '../styles/contact-form.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    profession: '',
    email: '',
    soloEntrepreneur: false,
    companyRepresentative: false,
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact-form">
      <h2 className="contact-form__title">DISCUTONS DE VOTRE PROJET</h2>
      <p className="contact-form__subtitle">
        Nous sommes disponibles pour répondre à toutes vos questions.
      </p>

      <form className="contact-form__form" onSubmit={handleSubmit}>
        <div className="contact-form__inputs">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Prénom"
            className="contact-form__input"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Nom"
            className="contact-form__input"
          />
        </div>

        <input
          type="text"
          name="profession"
          value={formData.profession}
          onChange={handleInputChange}
          placeholder="Profession"
          className="contact-form__input"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Adresse Email"
          className="contact-form__input"
        />

        <div className="contact-form__buttons">
          <button
            type="button"
            className={`contact-form__button ${formData.soloEntrepreneur ? 'active' : ''}`}
            onClick={() => setFormData({ ...formData, soloEntrepreneur: true, companyRepresentative: false })}
          >
            <span className="contact-form__icon">🧑‍💼</span>
            Je suis un recruteur ou RH
          </button>

          <button
            type="button"
            className={`contact-form__button ${formData.companyRepresentative ? 'active' : ''}`}
            onClick={() => setFormData({ ...formData, companyRepresentative: true, soloEntrepreneur: false })}
          >
            <span className="contact-form__icon">🏢</span>
            Je représente une entreprise
          </button>
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Votre message"
          className="contact-form__textarea"
        ></textarea>

        <button type="submit" className="contact-form__submit">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactForm;