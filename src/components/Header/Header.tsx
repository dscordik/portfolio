import React from 'react';
import './Header.css';

export const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__container">
                <a href="#" className="header__logo">Misha WEB</a>
                <a href="#footer" className="header__contact-btn">Связаться</a>
            </div>
        </header>
    );
};

export default Header;