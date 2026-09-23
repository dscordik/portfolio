import React from 'react';
import './About.css';

export const About: React.FC = () => {
    return (
        <section className="about" id="about">
            <div className="about__grid">
                <div className="about__main">
                    <h2 className="about__title">
                        Я <span className="about__name">Миша</span>
                    </h2>
                    <p className="about__text">
                        Привет! Мне 17 лет, я учусь в 11 классе.
                        Моё увлечение веб-разработкой началось полтора года назад с простого
                        любопытства: «А как вообще работают сайты?».
                    </p>
                    <p className="about__text">
                        Сейчас я активно развиваюсь во Fullstack-разработке. Создаю пет-проекты:
                        от стильных адаптивных лендингов до полноценных интернет-магазинов с
                        собственным бэкендом на FastAPI. Для меня код — это не просто синтаксис,
                        а инструмент для решения реальных задач и создания удобных интерфейсов.
                    </p>
                </div>

                <div className="about__stats">
                    <div className="about__stat">
                        <div className="about__stat-number">1.5</div>
                        <div className="about__stat-label">года в разработке</div>
                        <div className="about__stat-desc">
                            Самостоятельное изучение и практика. От первых HTML-страниц до fullstack-приложений.
                        </div>
                    </div>

                    <div className="about__stat">
                        <div className="about__stat-number">7+</div>
                        <div className="about__stat-label">пет-проектов</div>
                        <div className="about__stat-desc">
                            От лендингов до интернет-магазинов с бэкендом на FastAPI и базой данных.
                        </div>
                    </div>

                    <div className="about__stat">
                        <div className="about__stat-number">17</div>
                        <div className="about__stat-label">лет</div>
                        <div className="about__stat-desc">
                            Учусь в 11 классе. Развиваюсь в веб-разработке параллельно со школой.
                        </div>
                    </div>

                    <div className="about__stat">
                        <div className="about__stat-number">100%</div>
                        <div className="about__stat-label">самоучка</div>
                        <div className="about__stat-desc">
                            Без курсов и менторов. Только документация, туториалы и практика.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;