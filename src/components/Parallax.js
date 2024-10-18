import React from 'react';
import '../styles/parallax.scss';

const Parallax = () => {
  const imageData = [
    { 
      id: 1, 
      src: require('../components/Images/parallax.png'), 
      number: '1.', 
      title: 'FLEXIBILITÉ ET AGILITÉ', 
      text: <>Je <span className="highlight">m'adapte</span> à vos besoins et délais, en travaillant à distance pour plus de réactivité et de flexibilité.</>
    },
    { 
      id: 2, 
      src: require('../components/Images/parllax.png'), 
      number: '2.', 
      title: 'EXPERTISE FULLSTACK', 
      text: <>Des solutions en <span className="highlight">développement web</span> avec React et Node.js, ainsi qu'en gestion de projet pour optimiser vos initiatives digitales.</>
    },
    { 
      id: 3, 
      src: require('../components/Images/3D.jpg'), 
      number: '3.', 
      title: 'PARTENAIRE TECHNIQUE DE CONFIANCE', 
      text: <>Je vous <span className="highlight">accompagne</span> à chaque étape de votre projet avec des solutions sur mesure, adaptées à vos objectifs.</>
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