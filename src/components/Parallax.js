import React from 'react';
import '../styles/parallax.scss';

const Parallax = () => {
  const imageData = [
    { 
      id: 1, 
      src: '/images/img-nxb1.png', 
      number: '1.', 
      title: 'FLEXIBILITE TOTALE', 
      text: <>On <span className="highlight">s’adapte</span> à vos besoins, à vos délais, et à votre manière de travailler, en full remote.</>
    },
    { 
      id: 2, 
      src: '/images/img-nxb8.png', 
      number: '2.', 
      title: 'EXECUTION PRECISE', 
      text: <>Des conseils <span className="highlight">stratégiques</span> adaptés à vos enjeux digitaux.</>
    },
    { 
      id: 3, 
      src: '/images/nxp-img6.png', 
      number: '3.', 
      title: 'PARTENAIRE DE CONFIANCE', 
      text: <>Nous vous <span className="highlight">accompagnons</span> dans chaque étape de votre transition digitale.</>
    }
  ];

  return (
    <div className="parallax-container">
      {imageData.map((image) => (
        <div key={image.id} className="parallax">
          <div
            className="parallax-image"
            style={{ backgroundImage: `url(${image.src})` }}
          ></div>
          <div className="parallax-content">
            <h1 className="parallax-number">{image.number}</h1>
            <h2>{image.title}</h2>
            <p>{image.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Parallax;