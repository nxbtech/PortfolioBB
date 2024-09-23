import '../styles/bottomCard.scss';
import WhiteArrow from '../images/icons/white-arrow.png';

function BottomCard({ title, content, color }) { // Utilisation de la destructuration des props
    return (
        <div className="bottomCard" style={{ backgroundColor: color }}> {/* Application de la couleur via les props */}
            <div className="bottomCard__title">{title}</div> {/* Affichage du titre */}
            <div className="bottomCard__content">{content}</div> {/* Affichage du contenu */}
            <div className="bottomCard__icon"> {/* Correction de class en className */}
                <img src={WhiteArrow} alt="Flèche blanche" /> {/* Ajout d'un texte alternatif */}
            </div>
        </div>
    );
}

export default BottomCard;