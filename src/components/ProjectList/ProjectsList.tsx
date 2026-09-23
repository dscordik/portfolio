import React from 'react';
import { projects } from '../../data/projects.ts';
import { ProjectCard } from '../ProjectCard/ProjectCard.tsx';
import './ProjectsList.css';

export const ProjectsList: React.FC = () => {
    return (
        <section className="projects" id="projects">
            <h2 className="projects__title">Проекты</h2>
            <div className="projects__grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsList;