import React, { useState } from 'react';
import './styles/aboutCarousel.scss';

const NexabridgeCollapse = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: 'Mon Parcours Professionnel',
      content: (
        <>
          Ancien joueur de <span className="highlight">golf professionnel</span>, j'ai décidé après ma carrière de me reconvertir à 100% dans le <span className="important">développement web</span>. Depuis la fin de ma carrière sportive, je me consacre pleinement à la création d'applications modernes, en utilisant les technologies front-end et back-end pour répondre aux besoins des entreprises.
        </>
      )
    },
    {
      title: 'Mes Services',
      content: (
        <>
          Je propose :
          <ul>
            <li>Développement front-end avec <span className="highlight">React</span></li>
            <li>Développement back-end avec <span className="highlight">Node.js</span> et <span className="highlight">MongoDB</span></li>
            <li>Gestion de projets IT, de la conception à la mise en production</li>
            <li>Accompagnement pour la <span className="important">transformation digitale</span> des entreprises</li>
          </ul>
        </>
      )
    },
    {
      title: 'Mes Compétences Techniques',
      content: (
        <>
          J'ai développé des compétences solides en :
          <ul>
            <li><span className="highlight">React</span>, HTML, CSS, JavaScript</li>
            <li><span className="highlight">Node.js</span>, Express</li>
            <li>Gestion de bases de données et sécurisation des applications web</li>
          </ul>
        </>
      )
    },
    {
      title: 'Reconversion après le Golf',
      content: (
        <>
          Après ma carrière de <span className="highlight">golf professionnel</span>, je me suis lancé à fond dans le <span className="important">développement web</span>. Cette reconversion m'a permis de combiner ma rigueur sportive avec la gestion de projets complexes.
        </>
      )
    }
  ];
  return (
    <div className="nexabridge-collapse">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`nexabridge-collapse__section ${openIndex === index ? 'open' : ''}`}
        >
          <div className="nexabridge-collapse__header" onClick={() => toggleSection(index)}>
            <h3>{section.title}</h3>
            <span>{openIndex === index ? '-' : '+'}</span>
          </div>

          <div className="nexabridge-collapse__content" style={{ maxHeight: openIndex === index ? '500px' : '0px' }}>
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NexabridgeCollapse;