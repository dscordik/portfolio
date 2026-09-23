import React from 'react';
import './Hero.css';

export const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero__photo-wrap">
                <img
                    src="/projects/iamphoto.jpg"
                    alt=""
                    className="hero__photo"
                />
            </div>
            <h1 className="hero__title">
                Пишу <span className="em">код</span>, который{' '}
                <span className="em">работает</span>. Делаю{' '}
                <span className="em">сайты</span>, которые остаются.
            </h1>
            <p className="hero__pitch">
                Привет! Мне 17 лет, и я увлечён веб-разработкой.
                За полтора года создал множество пет-проектов — от лендингов
                до полноценных интернет-магазинов с бэкендом.
            </p>
            <div className="hero__actions">
                <a href="#footer" className="btn">
                    Обсудить проект →
                </a>
            </div>
        </section>
    );
};

export default Hero;