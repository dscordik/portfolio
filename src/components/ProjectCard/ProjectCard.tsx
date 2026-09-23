import React from 'react';
import './ProjectCard.css';
import type {Project} from "../../types/types.ts";

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <a
            href={project.linkDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
        >
            <img
                src={project.imageUrl}
                alt={project.title}
                className="project-card__image"
            />
            <div className="project-card__overlay">
                <div className="project-card__content">
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__description">{project.description}</p>
                    <div className="project-card__stack">
                        {project.stack.map((item) => (
                            <span key={item} className="project-card__badge">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;