import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, image }) => {
    return (
        <div className="project-card">
            <img src={image} alt={title} className="project-image" />
            <div className="project-content">
                <h2 className="project-title">{title}</h2>
                <p className="project-description">{description}</p>
                <a
                    href={link}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ver más
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
