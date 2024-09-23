import React from 'react';
import '../styles/ctaButton.scss';

function CtaButton({ text, onClick }) {
  return (
    <button className="cta-button" onClick={onClick}>
      <span className="cta-button__text">{text}</span>
      
    </button>
  );
}

export default CtaButton;