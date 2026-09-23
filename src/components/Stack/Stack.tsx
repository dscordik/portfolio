import React from 'react'
import './Stack.css'

const technologies = [
    'React',
    'TypeScript',
    'Vite',
    'FastAPI',
    'SQLAlchemy',
    'PostgreSQL',
    'SQLite',
    'Pydantic',
    'JWT',
    'React Router',
    'CSS',
    'HTML',
    'Git',
    'GitHub',
    'Vercel',
];

export const Stack: React.FC = () => {
    return (
        <section className="stack" id="stack">
            <h2 className="stack__title">Стек</h2>
            <p className="stack__description">
                Сейчас активно практикуюсь на пет-проектах, прокачиваю
                fullstack-навыки и учусь писать чистый, поддерживаемый код.
                Основной фокус — React + TypeScript на фронте и FastAPI на бэке.
            </p>
            <div className="stack__badges">
                {technologies.map((tech) => (
                    <span key={tech} className="stack__badge">
                        {tech}
                    </span>
                ))}
            </div>
        </section>
    );
};

export default Stack;