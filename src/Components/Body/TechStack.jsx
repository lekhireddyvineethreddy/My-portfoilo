import React, { useEffect, useState } from 'react';
import "./TechStack.css";

const TechStack = () => {
    const [animatedOnce, setAnimatedOnce] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!animatedOnce && isScrolledIntoView()) {
                animateTechIcons();
                setAnimatedOnce(true);
            }
        };

        const isScrolledIntoView = () => {
            const techIcons = document.querySelectorAll(".tech-icon");
            const scrollPosition = window.scrollY;

            for (let i = 0; i < techIcons.length; i++) {
                const icon = techIcons[i];
                const iconTop = icon.getBoundingClientRect().top + scrollPosition;
                if (iconTop < window.innerHeight) {
                    return true;
                }
            }
            return false;
        };

        const animateTechIcons = () => {
            const techIcons = document.querySelectorAll(".tech-icon");
            techIcons.forEach(icon => {
                icon.classList.add("animate-rain");
            });
            // Remove animation class after animation completes
            setTimeout(() => {
                techIcons.forEach(icon => {
                    icon.classList.remove("animate-rain");
                });
            }, 5000); // Adjust timeout according to your animation duration
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [animatedOnce]);

    return (
        <section className="tech-stack">
            <h2 className='tech-stack-heading'>Tech Stack</h2>
            <div className="tech-stack-container">
                <div className="tech-stack-row">
                    <div className="tech-item1">
                        <TechItem imgSrc="/Skillset/html.png" title="HTML" description="HTML" />
                        <TechItem imgSrc="/Skillset/javascript.png" title="JavaScript" description="JavaScript" />
                        <TechItem imgSrc="/Skillset/java.png" title="Java" description="Java" />
                        <TechItem imgSrc="/Skillset/react.png" title="React" description="React" />
                        <TechItem imgSrc="/Skillset/redux.png" title="Redux" description="Redux" />
                    </div>
                    <div className="tech-item2">
                        <TechItem imgSrc="/Skillset/bootstrap.png" title="Bootstrap" description="Bootstrap" />
                        <TechItem imgSrc="/Skillset/css.png" title="CSS" description="CSS" />
                    </div>
                </div>
            </div>
        </section>
    );
}

const TechItem = ({ imgSrc, title, description }) => {
    return (
        <div className="tech-item">
            <img className="tech-icon" src={imgSrc} title={title} alt={title} />
            <p className="tech-description">{description}</p>
        </div>
    );
}

export default TechStack;
