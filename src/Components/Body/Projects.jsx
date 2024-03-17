import React from "react";
import "./Projects.css";

const ProjectCard = ({ imageSrc, title, stack, githubLink, liveLink, description }) => {
    return (
        <div className="project-card">
            <a href={liveLink} className="project-link">
                <span className="project-thumbnail">
                    <img src={imageSrc} alt={title} className="project-image" />
                </span>
                <div className="project-details">
                    <h3 className="project-title">{title}</h3>
                    <p className="project-stack"><strong>{stack}</strong></p>
                    <div className="project-links">
                        <img src="https://pngimg.com/uploads/github/github_PNG40.png" alt="GitHub" className="project-link-icon" onClick={() => window.open(githubLink, '_blank')} />
                        <img src="./images/go.png" alt="Live Link" className="project-link-icon" onClick={() => window.open(liveLink, '_blank')} />
                    </div>
                    <p className="project-description">{description}</p>
                </div>
            </a>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="projects-container">
            <h1 className="projects-title">Personal Projects</h1>
            <div className="projects-grid">
                <ProjectCard
                    key="1"
                    imageSrc="path_to_your_image1.jpg"
                    title="Expense Tracker"
                    stack="HTML . CSS . React . Redux"
                    githubLink="https://github.com/your_username/expense-tracker"
                    liveLink="https://your-expense-tracker-live-link.com"
                    description="A simple expense tracker built with React and Redux."
                />
                <ProjectCard
                    key="2"
                    imageSrc="path_to_your_image2.jpg"
                    title="E-Commerce"
                    stack="HTML . CSS . React . Redux"
                    githubLink="https://github.com/your_username/e-commerce"
                    liveLink="https://your-e-commerce-live-link.com"
                    description="An e-commerce platform developed using React and Redux."
                />
                <ProjectCard
                    key="3"
                    imageSrc="path_to_your_image3.jpg"
                    title="Mail-Clientbox"
                    stack="HTML . CSS . React . Redux"
                    githubLink="https://github.com/your_username/mail-clientbox"
                    liveLink="https://your-mail-clientbox-live-link.com"
                    description="A mail client application built with React and Redux."
                />
                <ProjectCard
                    key="4"
                    imageSrc="path_to_your_image4.jpg"
                    title="My-Portfolio"
                    stack="HTML . CSS . React . Redux"
                    githubLink="https://github.com/your_username/my-portfolio"
                    liveLink="https://your-portfolio-live-link.com"
                    description="My personal portfolio website built using React and Redux."
                />
            </div>
        </div>
    );
};

export default Projects;
