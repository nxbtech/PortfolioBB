import '../styles/featureCard.scss';

function FeatureCard({ titre, content, imgSrc }) {
  return (
    <div className="featureCard">
      {/* Overlay pour rendre le texte plus lisible sur l'image */}
      <div className="featureCard__overlay"></div>

      <div className="featureCard__img">
        <img src={imgSrc} alt={titre} />
      </div>

      <div className="featureCard__text">
        <div className="featureCard__title">{titre}</div>
        <div className="featureCard__content">{content}</div>
        <div className="featureCard__icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 19L5 12L14 5V19Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;