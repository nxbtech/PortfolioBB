import React, { useState } from 'react';
import PortfolioFilterBar from '../components/Portfolio/PortfolioFilterBar';
import PortfolioCard from '../components/Portfolio/PortfolioCard';
import Modal from '../components/Portfolio/Modal';
import '../styles/portfolio.scss';

import PortfolioImg1 from '../components/Images/startup-interactive.png';
import PortfolioImg2 from '../components/Images/mobilefit-tracker.png';
import PortfolioImg3 from '../components/Images/ecommerce-accelrator.jpg';
import PortfolioImg4 from '../components/Images/seo-boost-pro.png';
import PortfolioImg5 from '../components/Images/wellness-app.png';

const projectData = [
  { 
    title: "Startup Interactive",
    category: "Développement Web",
    date: new Date("2023-02-28"), 
    img: PortfolioImg1, 
    content: "Conception d'un site interactif pour une startup, avec une expérience utilisateur fluide et moderne. Intégration d'un back-end sur Node.js pour la gestion des utilisateurs et des bases de données.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    tags: ["UX/UI", "Startup", "Responsive"],
    projectLink: "https://www.startupinteractive.com"
  },
  { 
    title: "MobileFit Tracker",
    category: "Mobile",
    date: new Date("2023-02-28"), 
    img: PortfolioImg2, 
    content: "Application mobile de suivi des performances de fitness avec analyse en temps réel et synchronisation avec les montres connectées. Disponible sur iOS et Android.",
    technologies: ["React Native", "Firebase", "Google Fit API"],
    tags: ["Fitness", "iOS", "Android"],
    projectLink: "https://www.mobilefittracker.com"
  },
  { 
    title: "E-Commerce Accelerator",
    category: "Développement Web",
    date: new Date("2023-05-12"), 
    img: PortfolioImg3, 
    content: "Développement d'une plateforme e-commerce optimisée pour les ventes en ligne. Amélioration des performances du site et intégration de passerelles de paiement sécurisées.",
    technologies: ["Vue.js", "Node.js", "Stripe", "Firebase"],
    tags: ["E-Commerce", "Performance", "Responsive"],
    projectLink: "https://www.ecommerceaccelerator.com"
  },
  { 
    title: "SEO Boost Pro",
    category: "SEO",
    date: new Date("2022-07-05"), 
    img: PortfolioImg4, 
    content: "Optimisation du référencement naturel pour un site e-commerce. Création d'une stratégie SEO complète, avec des résultats mesurables en termes d'augmentation du trafic organique.",
    technologies: ["SEO", "Google Analytics", "WordPress"],
    tags: ["SEO", "E-Commerce", "Analytics"],
    projectLink: "https://www.seoboostpro.com"
  },
  { 
    title: "Wellness App",
    category: "Mobile",
    date: new Date("2023-03-10"), 
    img: PortfolioImg5, 
    content: "Développement d'une application de bien-être et de suivi personnel. L'application permet de gérer des routines quotidiennes, avec des intégrations à des services de fitness et des notifications personnalisées.",
    technologies: ["React Native", "Node.js", "GraphQL"],
    tags: ["Bien-être", "Mobile", "Notifications"],
    projectLink: "https://www.wellnessapp.com"
  },
  { 
    title: "Smart Home Controller",
    category: "Développement Web",
    date: new Date("2023-08-01"), 
    img: 'path/to/image6.png', 
    content: "Création d'une interface de gestion pour maison connectée, permettant de contrôler à distance divers appareils (éclairage, sécurité, etc.). Utilisation de protocoles IoT pour assurer une gestion fluide et sécurisée.",
    technologies: ["React", "Node.js", "MQTT", "Raspberry Pi"],
    tags: ["IoT", "Domotique", "Smart Home"],
    projectLink: "https://www.smarthomecontroller.com"
  },
  { 
    title: "EduLearn Platform",
    category: "Développement Web",
    date: new Date("2022-11-15"), 
    img: 'path/to/image7.png', 
    content: "Plateforme d'apprentissage en ligne interactive pour les étudiants. Intégration de vidéos, quiz et rapports d'apprentissage détaillés. Sécurisation des données utilisateurs et gestion de l'accès aux contenus.",
    technologies: ["Angular", "Node.js", "MongoDB", "AWS"],
    tags: ["E-Learning", "Sécurité", "Vidéo"],
    projectLink: "https://www.edulearnplatform.com"
  },
  { 
    title: "Travel Buddy",
    category: "Mobile",
    date: new Date("2023-09-25"), 
    img: 'path/to/image8.png', 
    content: "Application de voyage offrant des recommandations personnalisées basées sur les préférences de l'utilisateur. Suivi en temps réel des vols et alertes sur les destinations.",
    technologies: ["Flutter", "Firebase", "Google Maps API"],
    tags: ["Voyage", "Recommandation", "Notifications"],
    projectLink: "https://www.travelbuddy.com"
  },
  { 
    title: "AI Article Generator",
    category: "Développement Web",
    date: new Date("2024-01-05"), 
    img: 'path/to/image9.png', 
    content: "Système basé sur l'IA pour la génération automatique d'articles. Utilisation du traitement du langage naturel pour générer du contenu cohérent et optimisé pour le SEO.",
    technologies: ["Python", "TensorFlow", "NLP"],
    tags: ["IA", "NLP", "SEO"],
    projectLink: "https://www.aiarticlegenerator.com"
  },
  { 
    title: "Crypto Portfolio Manager",
    category: "Développement Web",
    date: new Date("2023-06-20"), 
    img: 'path/to/image10.png', 
    content: "Développement d'une plateforme de gestion de portefeuilles cryptographiques, avec des outils d'analyse de données en temps réel et des recommandations basées sur l'historique de l'utilisateur.",
    technologies: ["React", "Node.js", "Blockchain", "CoinAPI"],
    tags: ["Crypto", "Finance", "Blockchain"],
    projectLink: "https://www.cryptomanager.com"
  }
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const categories = [...new Set(projectData.map(project => project.category))];

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  const openModal = (index) => {
    setSelectedProjectIndex(index);
  };

  const closeModal = () => {
    setSelectedProjectIndex(null);
  };

  const selectProject = (index) => {
    setSelectedProjectIndex(index);
  };

  const filteredProjects = projectData
    .filter(project => selectedCategory === 'all' || project.category === selectedCategory);

  return (
    <div className="portfolio-container">
      <PortfolioFilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onFilterChange={handleFilterChange}
      />

      <div className="portfolio-grid">
        {filteredProjects.map((project, index) => (
          <PortfolioCard
            key={index}
            title={project.title}
            content={project.content}
            img={project.img}
            date={project.date}
            onClick={() => openModal(index)} // Ouverture de la modale au clic
          />
        ))}
      </div>

      {selectedProjectIndex !== null && (
        <Modal
          project={projectData[selectedProjectIndex]}
          onClose={closeModal}
          projectData={projectData} // Pass projectData for the carousel
          selectProject={selectProject} // Function to navigate through projects
        />
      )}
    </div>
  );
};

export default Portfolio;