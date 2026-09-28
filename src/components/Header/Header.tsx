import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";

export const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__container">
                <Link to='/' className="header__logo">Misha WEB</Link>
                <a href="#footer" className="header__contact-btn">Связаться</a>
            </div>
        </header>
    );
};

export default Header;