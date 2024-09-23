import React, { useState } from 'react';
import '../styles/navbar.scss';
import logo from '../images/logo-nxb.png';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <div className="navbar__left">
                <div className="navbar__logo">
                    <img src={logo} alt="Nexabridge Logo" />
                </div>

                {/* Menu hamburger */}
                <div className={`navbar__hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>

            {/* Menu mobile/desktop */}
            <div className={`navbar__list ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li>Accueil</li>
                    <li>À Propos</li>
                    <li>Services</li>
                    <li>FAQ</li>
                </ul>
            </div>

            {/* Contact */}
            <div className="navbar__contact">
                <span>CONTACT</span>
            </div>
        </div>
    );
}

export default NavBar;