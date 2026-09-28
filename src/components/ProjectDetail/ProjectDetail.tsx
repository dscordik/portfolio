import React from 'react'
import { Link, useParams } from "react-router-dom";
import { projects } from "../../data/projects.ts";
import Footer from "../Footer/Footer.tsx";
import Header from "../Header/Header.tsx";
import './ProjectDetail.css';

export const ProjectDetail: React.FC = () => {
    const { id } = useParams()
    const project = projects.find((item) => item.id === Number(id))

    return (
        <div>
            <Header />
            <section className="project-detail">
                <Link to='/' className="project-detail__back">← На главную</Link>

                {project === undefined ? (
                    <p className="project-detail__not-found">Проект не найден...</p>
                ) : (
                    <div className="project-detail__layout">
                        <div className="project-detail__text">
                            <div>
                                <h1 className="project-detail__title">{project.title}</h1>
                                <p className="project-detail__paragraph">{project.fullDescription}</p>
                            </div>
                            <div>
                                <h2 className="project-detail__section-title">Какую проблему решает</h2>
                                <p className="project-detail__paragraph">{project.problem}</p>
                            </div>
                            <div>
                                <h2 className="project-detail__section-title">Стек</h2>
                                <div className="project-detail__stack">
                                    {project.stack.map((item) => (
                                        <span key={item} className="project-detail__badge">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="project-detail__actions">
                                <a href={project.linkDemo} target="_blank" rel="noopener noreferrer" className="project-detail__link project-detail__link--primary">
                                    Посмотреть проект
                                </a>
                                <a href={project.linkGit} target="_blank" rel="noopener noreferrer" className="project-detail__link project-detail__link--secondary">
                                    GitHub
                                </a>
                            </div>
                        </div>
                        <div className="project-detail__visual">
                            <img src={project.imageUrl} alt={project.title} className="project-detail__image"/>
                        </div>
                    </div>
                )}
            </section>
            <Footer />
        </div>
    )
}

export default ProjectDetail