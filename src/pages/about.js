import React from 'react';
import GridAbout from '../components/gridAbout'; // Import du composant GridAbout
import AboutCard from '../components/about-card'; // Import du composant AboutCard
import AboutImg1 from '../images/img-nxb.png';
import AboutImg2 from '../images/img-nxb2.jpg';
import AboutImg3 from '../images/img-nxb3.jpg';
import AboutImg4 from '../images/nxb-img7.png';
import AboutImg5 from '../images/nxp-img6.png';
import AboutImg6 from '../images/img-nxb8.png';
import '../styles/about.scss'; // Styles pour la section about

function About() {
  const aboutCardsContent = [
    { 
      title: "Gestion de Projet IT", 
      content: "Gestion complète de vos projets IT, du planning à la livraison.",
      image: AboutImg1 
    },
    { 
      title: "Développement Web", 
      content: "Création de sites performants avec les dernières technologies.",
      image: AboutImg2 
    },
    { 
      title: "Consulting IT", 
      content: "Conseil en transition digitale et optimisation des processus.",
      image: AboutImg3 
    },
    { 
      title: "DevOps et Automatisation", 
      content: "Automatisation et gestion d'infrastructures pour plus d'efficacité.",
      image: AboutImg4 
    },
    { 
      title: "Support et Maintenance", 
      content: "Maintenance et support pour garantir la stabilité de vos systèmes.",
      image: AboutImg5 
    },
    { 
      title: "Marketing Digital", 
      content: "Stratégies digitales pour optimiser votre présence en ligne.",
      image: AboutImg6 
    }
  ];

  return (
    <div className="about-section">
      <h2 className="about-section__title">VOTRE PARTENAIRE IT SUR-MESURE</h2>

      {/* Grid with About Cards */}
      <GridAbout>
        {aboutCardsContent.map((card, index) => (
          <AboutCard 
            key={index} 
            title={card.title} 
            content={card.content} 
            image={card.image} 
          />
        ))}
      </GridAbout>
    </div>
  );
}

export default About;