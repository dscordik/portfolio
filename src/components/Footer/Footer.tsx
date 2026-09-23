import React from 'react';
import './Footer.css';
import {socials} from "../../data/socials.ts";

export const Footer: React.FC = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer__container">
                <h2 className="footer__title">Misha</h2>
                <p className="footer__subtitle">
                    Fullstack-разработка и цифровые продукты.
                </p>

                <div className="footer__socials-grid">
                    {socials.map((social) => (
                        <a
                            key={social.platform}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__social-card"
                            aria-label={social.platform}
                        >
                            <div
                                className="footer__social-icon"
                                dangerouslySetInnerHTML={{ __html: social.icon }}
                            />
                            <div className="footer__social-info">
                                <h3 className="footer__social-name">{social.platform}</h3>
                                <p className="footer__social-desc">{social.description}</p>
                            </div>
                            <svg className="footer__social-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7V17"/>
                            </svg>
                        </a>
                    ))}
                </div>

                <p className="footer__signature">
                    © 2026 Миша. Сделано на React.
                </p>
            </div>
        </footer>
    );
};

export default Footer;