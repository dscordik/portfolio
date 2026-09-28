import React from 'react';
import './ProjectCard.css';
import type {Project} from "../../types/types.ts";
import {Link} from "react-router-dom";

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Link to={`/projects/${project.id}`} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-card__image"/>
            <div className="project-card__overlay">
                <div className="project-card__content">
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__description">{project.shortDescription}</p>
                    <div className="project-card__stack">
                        {project.stack.map((item) => (
                            <span key={item} className="project-card__badge">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;