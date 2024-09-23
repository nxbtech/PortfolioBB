import '../styles/topCard.scss';
import imageTopCard from '../images/img-nxb2.jpg';
import Arrow from '../images/icons/icone-arrow.png';

function TopCard() {
    return (
        <div className="topCard">
            <div className="topCard__image">
                <img src={imageTopCard} alt="Nexabridge" />
            </div>
            <div className="topCard__h3">SUIVEZ L'ACTUALITÉ DE NEXABRIDGE</div>
            <div className="topCard__title">NOTRE ACTUALITÉ</div>
            <div className="topCard__icon">
                <img src={Arrow} alt="Icone Flèche" />
            </div>
        </div>
    );
}

export default TopCard;